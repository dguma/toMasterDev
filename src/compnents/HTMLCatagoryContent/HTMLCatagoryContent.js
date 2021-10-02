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

    console.log(htmlDef)

    return (
        <Fragment>
            {/* <div className='subHeader'>
                <h1>HTML</h1>
            </div> */}
            
            {
            htmlDef.map(content => {
                const title = content.focus;
                const description = content.focusDefinition;
                // const subjectContent = content.focusContent;
                return (
                    <Fragment>
                        <div className='focusSummary'>
                            <cite>From: <a href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started'>{htmlDef[0].focusLinks}</a></cite>
                            <h1>{htmlDef[0].focus}</h1>
                            <h4>{htmlDef[0].focusDefinition}</h4>
                        </div>
                        
                        <div className="content" dangerouslySetInnerHTML={{__html: htmlSubjectContent}}></div>
                    </Fragment>
                );
            })}
            

        </Fragment>
    );
}

export default HTMLCatagoryContent;