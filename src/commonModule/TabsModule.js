import React from 'react';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    '& .Mui-selected': {
      color: '#FFF',
      backgroundColor: '#D2090F',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#D2090F',
    },
  },
}));

const TabsModule = props => {
  const {id, highlighted, onSelectTab, tabs, classes} = props;
  const [value, setValue] = React.useState(0);

  const tabHandleChange = (event, selectedTab) => {
    // console.log(event, selectedTab);
    onSelectTab(selectedTab);
    setValue(selectedTab);
  };

  const renderTab = (tab, index) => {
    return(
        <Tab 
          classes=""
          key={`${tab.id} ${index}`} 
          icon={tab.icon}
          id={`${tab.id} ${index}`}
          label={tab.text}
        />
    );
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={tabHandleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="label tabs"
      >
        {(tabs || []).map(renderTab)}
      </Tabs>
    </Paper>
  );
}

export default compose(
  withStyles(styles)
)(TabsModule);