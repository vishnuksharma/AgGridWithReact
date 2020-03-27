import React from 'react';
import LeftMenuComponent from './LeftMenu/LeftMenu.component';
import { Grid } from '@material-ui/core';
const Header = (props) => {
    const { location } = props;
console.log(props);

    return (
        <React.Fragment>
            <LeftMenuComponent {...location} />
            {props.children}
        </React.Fragment>
    )
}

export default Header;

