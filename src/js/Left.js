import React from 'react'
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom'
import  userLogo from '../assets/circle.png'
import checkLogo from '../assets/icon-check.png'
import manageLogo from '../assets/icon-manage.png'
import unlockLogo from '../assets/icon-unlock.png'
import avatar from '../assets/admin-avatar.png'
import '../css/headSide.css'

let firstStyle = {marginTop:'5%',backgroundColor: '#F2C94C'};
let otherStyle = {backgroundColor:'white'};
let otherTextStyle = {fontWeight: 'normal'};

function Left(){
        return (
            <div className="HeadSide">
                <img src={avatar} alt="admin" className="headAdmin" />

                <div className="adminInfo">
                    <img src={userLogo} alt="manage" className="adminLogo" />
                    <label className="adminName">admin</label>
                </div>

                <div className="sideItem" id="check" style={firstStyle}
                     onClick={jumpCheck}>
                    <img src={checkLogo} alt="check-icon" className="sidePic" />
                    <label className="sideText">教练审核</label>
                </div>

                <div className="sideItem" id="manage" style={otherStyle}
                     onClick={jumpManage}>
                    <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                    <label className="sideText" style={otherTextStyle}>教练管理</label>
                </div>

                <div className="sideItem" id="unlock" style={otherStyle} onClick={jumpUnlock}>
                    <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                    <label className="sideText" style={otherTextStyle}>教学管理</label>
                </div>

            </div>
        )
}

export default Left;

function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function jumpCheck() {
    window.location.href = "/CoachCheck?adminId=" + getQueryString("adminId");
}

function jumpManage() {

    window.location.href = "/CoachManage?adminId=" + getQueryString("adminId");
}

function jumpUnlock() {

    window.location.href = "/TeachingManage?adminId=" + getQueryString("adminId");
}
