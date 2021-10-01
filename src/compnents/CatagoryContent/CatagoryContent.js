import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
import './catagorycontent.css';

function CatagoryContent(props) {

    const [subject, setSubject] = useState([]);
    const [subjectContent, setSubjectContent] = useState(``);

    
    const url = 'https://warm-harbor-96907.herokuapp.com/api/subjects/';

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setSubject(res)
            setSubjectContent(res[0].focusContent)
        })
    },[])

    console.log(subjectContent)

    return (
        <Fragment>
            {/* <div className='subHeader'>
                <h1>HTML</h1>
            </div> */}
            
            {
            subject.map(content => {
                const title = content.focus;
                const description = content.focusDefinition;
                // const subjectContent = content.focusContent;
                return (
                    <Fragment>
                        <div className='focusSummary'>
                            <h1>{title}</h1>
                            <h4>{description}</h4>
                        </div>
                        
                        <div className="content" dangerouslySetInnerHTML={{__html: subjectContent}}></div>
                    </Fragment>
                );
            })}
            

        </Fragment>
    );
}

export default CatagoryContent;