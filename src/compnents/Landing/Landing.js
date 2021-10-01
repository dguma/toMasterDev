import React from 'react';
import './landing.css'

function Landing(props) {
    return (
        <section>
            <div className='heroContentContainer'>
                <h1>Beginner Friendly Web Developer Learning Center</h1>
                <div className='heroContent'>
                    <div className='heroSample'>
                        <p>Learn HTML by structuring conent.</p>
                        <p>Desin using CSS to present conent in a creative way.</p>
                        <p>Add functionalilty with JavaScript to have content come to life.</p>
                    </div>
                    <div className='heroSummary'>
                        <p>This is where the summary of the subject will live.</p>
                        <button className='heroButton' id='startLearningButton'>Start Learning</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;