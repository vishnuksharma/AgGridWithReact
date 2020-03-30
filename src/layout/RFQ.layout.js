import React, { memo, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import compose from 'recompose/compose';
import classNames from 'classnames';
import { Box, Grid, withStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import AgGridTableComponent from "../components/AgGridTable/AgGridTable.component";
import { tabList, TAB_ENUM } from "../components/Utilies/utility";
import TabsModule from '../commonModule/TabsModule';
import RFQContainer from "../components/RFQ/RFQ.component";
import QuotesComponent from "../components/RFQ/Quotes.component";
import ExceptionComponent from "../components/RFQ/Exception.component";
import { getSelectedTabState, getTableListState } from "../models/selectors";

const styles = (theme => ({
  tabContainer: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 2),
    },
  },
  maxWidth: {
    // maxWidth: '1280px',
  },
}));

const RFQlayout = props => {
  const { classes, updateSelectedTabState } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  console.log(props, 'props props');
  
  const onSelectTab = useCallback( clickedTab => {
    console.log(clickedTab, 'clickedTab');
    updateSelectedTabState(clickedTab)
    setSelectedTab(clickedTab);
  }, [selectedTab]);

  const renderTabContainer = () => {
    switch (selectedTab) {
      case TAB_ENUM.RFQ:
        return <RFQContainer {...props} />;
      case TAB_ENUM.QUOTES:
        return <QuotesComponent {...props} />;
      case TAB_ENUM.EXCEPTION:
        return <ExceptionComponent {...props} />;
      default:
        return <RFQContainer {...props} />;
    }
  }
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={10} className={classNames(classes.tabContainer, classes.maxWidth)}>
          <TabsModule id="rfqTabs" highlighted={0} tabs={tabList()} onSelectTab={onSelectTab}/>
        </Grid>
        <Grid item xs={10} className={classNames(classes.tabContainer, classes.maxWidth)}>
          {renderTabContainer()}
        </Grid>
      </Grid>
      
    </React.Fragment>
  );
};

const mapState = state => {
  return {
    selectedTab: getSelectedTabState(state),
    tableData: getTableListState(state),
  };
};

const mapDispatch = (dispatch) => {
  const { globalStates: { updateSelectedTabState, getTableData } } = dispatch;
  return {
    updateSelectedTabState,
    getTableData
  };
};

RFQlayout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

RFQlayout.defaultProps = {}

export default compose(withStyles(styles), connect(
  mapState,
  mapDispatch
))(memo(RFQlayout));
