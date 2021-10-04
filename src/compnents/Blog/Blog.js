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

        setTimeout(()=> {
            event.target.children[2].children[2].value = ''
            event.target.children[0].children[2].value = ''
            event.target.children[1].children[2].value = ''
        },1000)

        fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                ...props.posts,
                name: event.target.children[2].children[2].value,
                title: event.target.children[0].children[2].value,
                description: event.target.children[1].children[2].value,
                // date: new Date()
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    function blogEditSubmitHandler(event) {
        event.preventDefault();
        fetch(`${url}${event.target.parentNode.parentNode.id}/`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                name: event.target.parentNode.children[2].children[2].value,
                title: event.target.parentNode.children[0].children[2].value,
                description: event.target.parentNode.children[1].children[2].value,
                })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))

        setTimeout(()=> {
            event.target.parentNode.children[2].children[2].value = ''
            event.target.parentNode.children[0].children[2].value = ''
            event.target.parentNode.children[1].children[2].value = ''
        },1000)
        console.log(event.target.parentNode.parentNode)
    }

    function deleteHandler(event) {
        event.preventDefault();
        fetch(`${url}${event.target.parentNode.parentNode.id}/`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: "DELETE",
            body:null,
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }
// event.target.nodeName === 'INPUT' || 
//            event.target.nodeName === 'INPUT' ||
//            event.target.nodeName === 'TEXTAREA' || 
//            event.target.className === 'confirm' ||
    function editToggle(event) {
            event.target.parentNode.parentNode.children[4].style.display = 'flex'
    }

    function cancelEdit(event) {
        event.target.parentNode.children[4].style.display = 'none'
    }

   
    return (
        <Fragment>

            <div className='blogFormContainer' >
                <form className='blogForm' onSubmit={blogFormSubmitHandler}>
                    <div className='formItem contentInput' >
                        <label>Content</label>
                        <br />
                        <textarea></textarea>
                    </div>
                    <div className='formItem captionInput' >
                        <label>Caption</label>
                        <br />
                        <input></input>
                    </div>
                    <div className='formItem aurthorInput' >
                        <label>Aurthor</label>
                        <br />
                        <input></input>
                    </div>
                    <button type='submit' className='blogSendButton' >Send</button>
                </form>
                
            </div>

            <div className='blogListContainer' >

            {
                props.posts.map(blogItem =>  {
                    return (
                        <div className='blogItemContainer' id={blogItem.id}  >
                            <p className='blogItemContent' >{blogItem.description}</p>
                            <hr />
                            <label className='blogItemCaption' ><span>Caption:</span> {blogItem.title}</label>
                            <div className='blogItemAuthor' >
                                <p>By: {blogItem.name}</p>
                                <button className='blogEditButton' onClick={editToggle} >Edit</button>
                                <button className='blogDeleteButton' onClick={deleteHandler}>Delete</button>
                            </div>
                            <form className='blogEdit' onSubmit={blogEditSubmitHandler}>
                                <div className='formItem contentInput' >
                                    <label>Content</label>
                                    <br />
                                    <textarea></textarea>
                                </div>
                                <div className='formItem captionInput' >
                                    <label>Caption</label>
                                    <br />
                                    <input></input>
                                </div>
                                <div className='formItem aurthorInput' >
                                    <label>Aurthor</label>
                                    <br />
                                    <input></input>
                                </div>
                                <button type='submit' className='confirm' onClick={blogEditSubmitHandler}>Confirm</button>
                            </form>
                            <button className='cancel' onClick={cancelEdit} >Cancel</button>
                        </div>
                    )
                })
            }

            </div>

        </Fragment>
    );
}

export default Blog;