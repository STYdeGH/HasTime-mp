import React from 'react';

import Top from './Top';
import CoachList from "./CoachList";
import Left from "./Left";

/*
 @description: 教练审核列表组件
 */
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