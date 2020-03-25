import React from 'react';
import LeftMenuComponent from './LeftMenu/LeftMenu.component';
const Header = (props) => {

    return (
        <React.Fragment>
            <LeftMenuComponent />
            {props.children}
        </React.Fragment >
    )
}

export default Header;

