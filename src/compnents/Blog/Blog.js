import React, { Fragment, useState, useEffect } from 'react';
import './blog.css';

const url = 'https://warm-harbor-96907.herokuapp.com/api/posts/';

function Blog(props) {

    const [blog, setBlog] = useState(props.posts);
    

    function blogFormSubmitHandler(event) {
        event.preventDefault();
        setBlog({
            ...props.posts,
            name: event.target.children[2].children[2].value,
            title: event.target.children[0].children[2].value,
            description: event.target.children[1].children[2].value,
            // date: new Date()
        })
    }

    function deleteHandler(event) {
        event.preventDefault();
        fetch(`${url}${event.target.parentNode.parentNode.id}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "DELETE"
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
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
    },[blog])

   
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
                props.posts.map(blogItem =>  {
                    return (
                        <div className='blogItemContainer' id={blogItem.id}>
                            <p className='blogItemContent' >{blogItem.description}</p>
                            <hr />
                            <label className='blogItemCaption' ><span>Caption:</span> {blogItem.title}</label>
                            <div className='blogItemAuthor' >
                                By: {blogItem.name}
                                <button onClick={deleteHandler}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }

            </div>

        </Fragment>
    );
}

export default Blog;