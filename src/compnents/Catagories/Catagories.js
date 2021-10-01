import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './catagories.css';

function Catagories(props) {

    const [catagoryExpand, setCatagoryExpand] = useState(false);

    function clickHandler(event) {
        // event.preventDefault();
        (event.target.id === 'catagory') ? setCatagoryExpand(true) : setCatagoryExpand(false)
        
    }
// console.log(catagoryExpand)
    return (
        <Fragment>
            <div className='catagoryContainer' onClick={clickHandler}>
                <div className='catagories'>
                    <span id='catagory'>
                        <NavLink to='catagory'><p>HTML</p></NavLink>
                    </span>
                    <span id='catagory'>
                        <p>CSS</p>
                    </span>
                    <span id='catagory'>
                        <p>JavaScript</p>
                    </span>
                </div>
            </div>

            {
                (catagoryExpand) ?
                <div className='catagoryDetailContainer'>
                <div className='catagorySummary'>
                    <h2>HTML Hyper Text Markup Language</h2>
                    <p>This is a decription of the topic that will be covered in this lesson.</p>
                </div>
                <div className='catagoryStart'>
                    <div className='catagoryPreview'>
                        
                    </div>
                    <div className='catagoryButton'>
                        Start Course
                    </div>
                </div>
            </div> : null
            }
        </Fragment>
    );
}

export default Catagories;