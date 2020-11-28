import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;