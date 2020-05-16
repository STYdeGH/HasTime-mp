import React from 'react';
import ReactDOM from 'react-dom';

import Top from './Top';
import adminAvatar from "../assets/admin-avatar.png";
import avatar from '../assets/coach.png'
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";
import clubLogo from "../assets/icon-club.png";
import '../css/headSide.css'
import '../css/coachList.css'

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

function CoachManage() {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <Top />
                <div className="HeadSide">
                    <img src={adminAvatar} alt="admin" className="headAdmin" />

                    <div className="adminInfo">
                        <img src={userLogo} alt="manage" className="adminLogo" />
                        <label className="adminName">admin-username</label>
                    </div>

                    <div className="sideItem" id="check" onClick={jumpCheck}>
                        <img src={checkLogo} alt="check-icon" className="sidePic" />
                        <label className="sideText">教练审核</label>
                    </div>

                    <div className="sideItem" id="manage" style={chosenStyle}>
                        <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                        <label className="sideText">教练管理</label>
                    </div>

                    <div className="sideItem" id="unlock" style={otherStyle} onClick={jumpUnlock}>
                        <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                        <label className="sideText" >教学管理</label>
                    </div>

                </div>
                <div className="content" id="content">
                    <div className="search-bar">
                        <input type="text" placeholder="请输入您要搜索的内容..."></input>
                        <button type="submit"></button>
                    </div>

                    <div className="list">
                        <div className="listItem" onClick={()=>window.location.href = "/CoachManage/detail"}>
                            <img src={avatar} className="coach-pic" alt="coach-avatar" />
                            <div>
                                <img src={clubLogo} className="club-logo" alt="club-logo"/>
                                <label className="club-name">club-name</label>
                            </div>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <div className="listItem">
                            <img src={avatar} className="coach-pic" alt="coach-avatar" />
                            <div>
                                <img src={clubLogo} className="club-logo" alt="club-logo"/>
                                <label className="club-name">club-name</label>
                            </div>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <div className="listItem">
                            <img src={avatar} className="coach-pic" alt="coach-avatar" />
                            <div>
                                <img src={clubLogo} className="club-logo" alt="club-logo"/>
                                <label className="club-name">club-name</label>
                            </div>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <div className="listItem">
                            <img src={avatar} className="coach-pic" alt="coach-avatar" />
                            <div>
                                <img src={clubLogo} className="club-logo" alt="club-logo"/>
                                <label className="club-name">club-name</label>
                            </div>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <div className="listItem">
                            <img src={avatar} className="coach-pic" alt="coach-avatar" />
                            <div>
                                <img src={clubLogo} className="club-logo" alt="club-logo"/>
                                <label className="club-name">club-name</label>
                            </div>
                            <label className="coach-name">coach-name</label>
                        </div>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

export default CoachManage;

function jumpCheck() {

    window.location.href = "/CoachCheck";
}

function jumpUnlock() {

    window.location.href = "/TeachingManage";
}