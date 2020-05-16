import React from 'react';
import ReactDOM from 'react-dom';

import Top from './Top';
import CoachList from "./CoachList";
import Left from "./Left";

function CoachCheck() {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <Top />
                <Left/>
                <CoachList/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

export default CoachCheck;