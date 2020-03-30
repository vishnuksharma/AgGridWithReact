import React from 'react';
import RFQLayout from '../layout/RFQ.layout';
import { Router } from "@reach/router"
import Header from '../components/Header';
import OrderLayout from '../layout/Order.layout';
import { ROUTE_NAME } from '../components/Utilies/constants';
import ReportsLayout from '../layout/Reports.layout'
import SettingsLayout from '../layout/Settings.layout'
import MonitorScreenLayout from '../layout/MonitorScreen.layout'
import MarketDataLayout from '../layout/MarketData.layout'
import AccessRightsLayout from '../layout/AccessRights.layout'

const Routes = (props) => {
    // console.log(props);

    return (
            <Router>
                <Header path="/">
                    <RFQLayout path={ROUTE_NAME.RFQ} />
                    <OrderLayout path={ROUTE_NAME.ORDER} />
                    <ReportsLayout path={ROUTE_NAME.REPORTS} />
                    <MonitorScreenLayout path={ROUTE_NAME.MONITOER_SCREEN} />
                    <SettingsLayout path={ROUTE_NAME.SETTINGS} />
                    <AccessRightsLayout path={ROUTE_NAME.ACCESS_RIGHTS} />
                    <MarketDataLayout default path={ROUTE_NAME.MARKET_DATA} />
                </Header>
            </Router>
    )
}

export default Routes;