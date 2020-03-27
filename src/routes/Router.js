import React from 'react';
import RFQLayout from '../layout/RFQ.layout';
import { Router } from "@reach/router"
import Header from '../components/Header';
import OrderLayout from '../layout/Order.layout';


const Routes = (props) => {
    // console.log(props);

    return (
            <Router>
                <Header path="/">
                    <RFQLayout path="/rfq" />
                    <OrderLayout default path="/order" />
                </Header>
            </Router>
    )
}

export default Routes;