import React from 'react';
import { Link } from "@reach/router"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardTravel from '@material-ui/icons/CardTravel';
import Assignment from '@material-ui/icons/Assignment';
import DesktopMac from '@material-ui/icons/DesktopMac';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import styles from './LeftMenu.component.style'

const useStyles = makeStyles(styles);

const LeftMenuComponent = (props) => {
  const { pathname } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getleftMenuWithIcons = () => {
    return(
      [
        { name: 'RFQ', icon: <Assignment />},
        { name: 'Order', icon: <CardTravel />},
        { name: 'Reports', icon: <FormatAlignLeftIcon />},
        { name: 'Monitor Screen', icon: <DesktopMac />},
        { name: 'Setting', icon: <SettingsIcon />},
        { name: 'Access Rights', icon: <SupervisorAccountIcon />},
        { name: 'Market Data', icon: <Assignment />},
      ]
    )
  };

  const getActiveMenu = (url) => {
    const urlMatch = `/${(url).replace(/\s/g, '-').toLowerCase()}`
    console.log(pathname ,urlMatch);
    
    return pathname === urlMatch ? 'activeMenu' : 'leftMenu';
  }
  return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.leftMenuWrapper}>
          {(getleftMenuWithIcons() || []).map((menu, index) => (
            <Link className={getActiveMenu(menu.name)} key={menu.name} to={(menu.name).replace(/\s/g, '-').toLowerCase()}>
              <ListItem button >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default LeftMenuComponent;