import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './signin.css'

function SignIn(props) {

    return (
        <Fragment>
            <div className='signInContainer'>
                <form className='signInForm' onSubmit={props.submitHandler}>

                    <div className='signInPasswordContainer'>
                        <input className='signInInput' id='signInEmail' placeholder='Enter your email'></input>
                        <input   input className='signInInput' id='signInPassword' placeholder='Enter your password' type='password'></input>
                    </div>

                    <button type='submit' id='signInButton'>Submit</button>

                </form>
            </div>
            <div className='signInGreeting'>
                <h2>Sign in</h2>
                <p>Welcome, back!</p>
            </div>
        </Fragment>
    );
}

export default SignIn;