import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
import './htmlcatagorycontent.css';

function HTMLCatagoryContent(props) {

    const [htmlDef, sethtmlDef] = useState([]);
    const [htmlSubjectContent, setHTMLSubjectContent] = useState(``);

    
    const url = 'https://warm-harbor-96907.herokuapp.com/api/subjects/';

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            sethtmlDef(res)
            setHTMLSubjectContent(res[0].focusContent)
        })
    },[])

    const htmlContent = htmlDef[0];

    if(htmlContent) {
        return (
            <Fragment>
                <div className='focusSummary'>
                    <cite>From: <a href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started'>{htmlContent.focusLinks}</a></cite>
                    <h1>{htmlContent.focus}</h1>
                    <h4>{htmlContent.focusDefinition}</h4>
                            </div>
                
                <div className="content" dangerouslySetInnerHTML={{__html: htmlSubjectContent}}/>
            </Fragment> 
        )
    } else {
        return (
            <div></div>
        )
    }
        
}

export default HTMLCatagoryContent;