import React, { Fragment } from 'react';
import Catagories from '../Catagories/Catagories';
import './dashboard.css'

function Dashboard(props) {
    return (
        <Fragment>
            {
                (props.user) ? <Catagories /> : 'Sign in'
            }
            
        </Fragment>
    );
}

export default Dashboard;