import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
// import './javascriptcatagorycontent.css';

function JavaScriptCatagoryContent(props) {

    const [javaScriptDef, setJavaScriptDef] = useState([]);
    const [javaScriptSubjectContent, setJavaScriptSubjectContent] = useState(``);

    
    const url = 'https://warm-harbor-96907.herokuapp.com/api/subjects/';

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setJavaScriptDef(res)
            setJavaScriptSubjectContent(res[1].focusContent)
        })
    },[])

    const javaScriptContent = javaScriptDef[1];

    if(javaScriptContent) {
        return (
            <Fragment>
                <div className='focusSummary'>
                <cite>From: <a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'>{javaScriptContent.focusLinks}</a></cite>
                    <h1>{javaScriptContent.focus}</h1>
                    <h4>{javaScriptContent.focusDefinition}</h4>
                </div>
                
                <div className="content" dangerouslySetInnerHTML={{__html: javaScriptSubjectContent}}></div>
            </Fragment>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default JavaScriptCatagoryContent;