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

    return (
        <Fragment>
            {/* <div className='subHeader'>
                <h1>HTML</h1>
            </div> */}
            
            {
            cssDef.map(content => {
                return (
                    <Fragment>
                        <div className='focusSummary'>
                        <cite>From: <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS'>{cssDef[2].focusLinks}</a></cite>
                            <h1>{cssDef[2].focus}</h1>
                            <h4>{cssDef[2].focusDefinition}</h4>
                        </div>
                        
                        <div className="content" dangerouslySetInnerHTML={{__html: cssSubjectContent}}></div>
                    </Fragment>
                );
            })}
            

        </Fragment>
    );
}

export default CSSCatagoryContent;