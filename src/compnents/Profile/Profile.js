import React, { Fragment, useEffect, useState } from 'react';
import './profile.css';

function Profile(props) {
    
    const [user, setUser] = useState({})
    let url = `http://localhost:8000/api/users/${user.id}/`;

    useEffect(() => {
        fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(props.basicInfo)
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [props.basicInfo, url])
    // console.log(basicInfo)


// console.log(props.basicInfo)
    return (
        <Fragment>
        <div className='profileContainer' >
            <div className='basicInfoContainer' >
                <div>
                    <h4>First Name</h4>
                    <p>{props.found.firstName}</p>
                </div>
                <div>
                    <h4>Last Name</h4>
                    <p>{props.found.lastName}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{props.found.email}</p>
                </div>
                <div>
                    <h4>Password</h4>
                    <p>{props.found.password}</p>
                </div>

            </div>

            <div className='addtionalInfoContainer' >
            
            </div>

            <div className='editAddtionalInfoContainer' >
            
            </div>

            <div className='achievementContainer' >
            
            </div>

        </div>
        <div className='editBasicInfoContainer' >
        <form onSubmit={props.formSubmitHandler}>
            <div className='infoContainer' >
                <label>First Name</label>
                <br />
                <input placeholder='Enter your first name' ></input>
            </div>
            <div className='infoContainer' >
                <label>Last Name</label>
                <br />
                <input placeholder='Enter your last name' ></input>
            </div>
            <div className='infoContainer' >
                <label>Email</label>
                <br />
                <input placeholder='Enter your email address' ></input>
            </div>
            <div className='infoContainer' >
                <label>Confirm Email</label>
                <br />
                <input placeholder='Confirm your email address' ></input>
            </div>
            <div className='infoContainer' >
                <label>Password</label>
                <br />
                <input placeholder='Enter a password' ></input>
            </div>
            <div className='infoContainer' >
                <label>Confirm Password</label>
                <br />
                <input placeholder='Confirm your password' ></input>
            </div>

            
        </form>
        <button type='submit'>Save</button>
    </div>
    </Fragment>
    );
}

export default Profile;