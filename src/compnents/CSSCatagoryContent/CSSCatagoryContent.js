import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
import './csscatagorycontent.css';

function CSSCatagoryContent(props) {

    const [cssDef, setCSSDef] = useState([]);
    const [cssSubjectContent, setCSSSubjectContent] = useState(``);

    
    const url = 'https://warm-harbor-96907.herokuapp.com/api/subjects/';

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setCSSDef(res)
            setCSSSubjectContent(res[2].focusContent)
        })
    },[])

    const cssContent = cssDef[2];

    if(cssContent) {
        return (
            <Fragment>
                <div className='focusSummary'>
                <cite>From: <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS'>{cssContent.focusLinks}</a></cite>
                    <h1>{cssContent.focus}</h1>
                    <h4>{cssContent.focusDefinition}</h4>
                </div>
                
                <div className="content" dangerouslySetInnerHTML={{__html: cssSubjectContent}}></div>
            </Fragment>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CSSCatagoryContent;