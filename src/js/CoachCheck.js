import React from 'react';
import ReactDOM from 'react-dom';

import Top from './Top';
import CoachList from "./CoachList";
import Left from "./Left";

function CoachCheck() {
    return(
        <div className="root">
                <Top />
                <Left/>
                <CoachList/>
        </div>
    )
}

export default CoachCheck;