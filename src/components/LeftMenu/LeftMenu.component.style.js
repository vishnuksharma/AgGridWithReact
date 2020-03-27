const drawerWidth = 100;
const styles = (theme => ({
  root: {
    display: 'flex',
    // width: '72px',
    '& .MuiAppBar-colorPrimary': {
      backgroundColor: '#181d1f',
    },
  },
  leftMenuWrapper: {
    '& a.leftMenu': {
      color: '#565656',
      textDecoration: 'none',
    },
    '& .activeMenu': {
      color: '#D2090F',
      textDecoration: 'none',
      '& .MuiListItem-button': {
        backgroundColor: '#181d1f',
      },
      '& .MuiListItem-button svg': {
        color: '#D2090F',
      },
    },
    '& .MuiListItem-root': {
      flexDirection: 'column',
    },
    '& .MuiSvgIcon-root': {
      width: '2em',
      height: '2em',
    },
    '& .MuiTypography-body1': {
      fontSize: '.7rem',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    // width: 0,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    // width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      // width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))
export default styles;