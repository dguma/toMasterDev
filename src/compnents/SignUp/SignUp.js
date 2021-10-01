import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';

const url = 'https://warm-harbor-96907.herokuapp.com/api/users/';

const defaultUser = {
    firstName:'',
    lastName: '',
    email: '',
    password: ''
}

function SignUp(props) {

    const [user, setUser] = useState(defaultUser);

    function submitHandler(event) {
        event.preventDefault();
        setUser({
            firstName: event.target.children[0].children[0].value,
            lastName: event.target.children[0].children[1].value,
            email: event.target.children[0].children[2].value,
            password: (event.target.children[1].children[0].value === event.target.children[1].children[1].value) ? event.target.children[1].children[0].value : null
        })
    }

    

    useEffect(() => {
        fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(user)
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[user])

    console.log(user)

    return (
        <Fragment>
            <div className='signUpContainer'>
                <form className='profileInfoForm' onSubmit={submitHandler}>

                    <div className='profileInfoContainer'>
                        <input className='signUpInput' id='profileFirstName' placeholder='First Name'></input>
                        <input className='signUpInput' id='profileLastName' placeholder='Last Name'></input>
                        <input className='signUpInput' id='profileEmail' placeholder='Email'></input>
                    </div>

                    <div className='profilePasswordContainer'>
                        <input className='signUpInput' id='profilePassword' placeholder='Enter a password'></input>
                        <input className='signUpInput' id='profileConfirmPassword' placeholder='Confirm password'></input>
                    </div>

                    <button type='submit' id='profileSaveButton'>Save</button>

                </form>
            </div>
            <div className='signUpGreeting'>
                <h2>Create Profile</h2>
                <p>Welcome, sign up to start learning today.</p>
            </div>
        </Fragment>
    );
}

export default SignUp;