import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Browse from '../Browse/Browse';
import './header.css'

function Header(props) {

    return (
        <Fragment>
            <header>
                <div className='headerContainer'>
                    <Link to='/'><h2>toMasterDev</h2></Link>
                    {
                        (props.user) ? 
                        <div className='headerButtonsContainer'>
                            <h4>Hello, {props.user ? props.user.firstName : ''}</h4>
                            <button className='headerButton' id='browseButton'>Browse</button>
                            <Link to='/' onClick={()=> window.location.reload()}><button className='headerButton' id='signOutButton'>Sign Out</button></Link> 
                        </div>
                        :
                        <div className='headerButtonsContainer'>
                            <Link to='signin'><button className='headerButton' id='signInButton'>Sign In</button></Link>
                            <Link to='signup'><button className='headerButton' id='signUpButton'>Sign Up</button></Link>
                        </div>
                    }
                </div>
                
            </header>
            {
                (props.browse) ?
                <Browse /> : null
            }
        </Fragment>
    );
}

export default Header;