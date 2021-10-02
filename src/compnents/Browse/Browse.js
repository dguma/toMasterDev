import React from 'react';
import { Link } from 'react-router-dom';
import './browse.css'

function Browse(props) {
    return (
        <div className='browseContainer'>
            <div className='profileSectionContainer'>
                <label>Profile</label>
                <ul>
                    <Link to='profile' ><li>View Profile</li></Link>
                    <Link to='dashboard' ><li>Dashboard</li></Link>
                </ul>
            </div>
            <div className='catagorySectionContainer'>
                <label>Catagories</label>
                <ul>
                    <Link to='html-catagory'><li>HTML</li></Link>
                    <Link to='css-catagory'><li>CSS</li></Link>
                    <Link to='javascript-catagory'><li>JavaScript</li></Link>
                </ul>
            </div>
            <div className='blogSectionContainer'>
                <label>Blog</label>
                <ul>
                    <Link to='blog' ><li>View Posts</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Browse;