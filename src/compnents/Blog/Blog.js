import React, { Fragment, useState, useEffect } from 'react';
import './blog.css';

const url = 'https://warm-harbor-96907.herokuapp.com/api/posts/';

function Blog(props) {

    const [blog, setBlog] = useState({});

    function blogFormSubmitHandler(event) {
        event.preventDefault();
        setBlog({
            name: event.target.children[2].children[2].value,
            title: event.target.children[0].children[2].value,
            discription: event.target.children[1].children[2].value,
            // date: new Date()
        })
        console.log(event.target.children[2].children[2].value)
    }

    

    useEffect(() => {
        fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(blog)
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[])

    console.log(blog)

    return (
        <Fragment>

            <div className='blogFormContainer' >
                <form className='blogForm' onSubmit={blogFormSubmitHandler}>
                    <div className='formItem' >
                        <label>Title</label>
                        <br />
                        <input></input>
                    </div>
                    <div className='formItem' >
                        <label>Description</label>
                        <br />
                        <input></input>
                    </div>
                    <div className='formItem' >
                        <label>Aurthor</label>
                        <br />
                        <input></input>
                    </div>
                    <button type='submit'>Send</button>
                </form>
                
            </div>

            <div className='blogListContainer' >

            {
                (blog !== undefined) ?
                blog.map(blogItem =>  {
                    return (
                        <div>
                            <h4>{blogItem.title}</h4>
                            <p>{blogItem.description}</p>
                            <p>By: {blogItem.name}</p>
                            {blogItem.date}
                        </div>
                    )
                }) : null
            }

            </div>

        </Fragment>
    );
}

export default Blog;