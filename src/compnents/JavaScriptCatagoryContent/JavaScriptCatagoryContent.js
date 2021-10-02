import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
import './javascriptcatagorycontent.css';

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

    return (
        <Fragment>
            {/* <div className='subHeader'>
                <h1>HTML</h1>
            </div> */}
            
            {
            javaScriptDef.map(content => {
                return (
                    <Fragment>
                        <div className='focusSummary'>
                        <cite>From: <a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'>{javaScriptDef[1].focusLinks}</a></cite>
                            <h1>{javaScriptDef[1].focus}</h1>
                            <h4>{javaScriptDef[1].focusDefinition}</h4>
                        </div>
                        
                        <div className="content" dangerouslySetInnerHTML={{__html: javaScriptSubjectContent}}></div>
                    </Fragment>
                );
            })}
            

        </Fragment>
    );
}

export default JavaScriptCatagoryContent;