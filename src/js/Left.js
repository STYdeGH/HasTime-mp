import React from 'react'
import  userLogo from '../assets/circle.png'
import checkLogo from '../assets/check.png'
import manageLogo from '../assets/manage.png'
import unlockLogo from '../assets/unlock.png'
import avatar from '../assets/admin-avatar.png'
import '../css/headSide.css'

let firstStyle = {marginTop:'5%',backgroundColor: '#F2C94C'};
let chosenStyle = {backgroundColor:'#E5E5E5'};
let chosenTextStyle = {fontWeight: 'bold'};
let otherStyle = {backgroundColor:'white'};
let otherTextStyle = {fontWeight: 'normal'};

function Left() {
    return (
        <div className="HeadSide">
            <img src={avatar} alt="admin" className="headAdmin"/>

            <div className="adminInfo">
                <img src={userLogo} alt="manage" className="adminLogo"/>
                <text className="adminName">admin-username</text>
            </div>

            <div className="sideItem" id="check" style={firstStyle} onClick={jumpCheck}>
                <img src={checkLogo} alt="check-icon" className="sidePic"/>
                <text className="sideText">教练审核</text>
            </div>

            <div className="sideItem" id="manage" style={otherStyle} onClick={jumpManage}>
                <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                <text className="sideText" style={otherTextStyle}>教练管理</text>
            </div>

            <div className="sideItem" id="unlock" style={otherStyle} onClick={jumpUnlock}>
                <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                <text className="sideText" style={otherTextStyle}>教学管理</text>
            </div>

        </div>
    )
}

export default Left;

function jumpCheck() {
    document.getElementById("check").style.backgroundColor = '#F2C94C';
    document.getElementById("manage").style.backgroundColor = 'white';
    document.getElementById("unlock").style.backgroundColor = 'white';

    let text = document.getElementsByClassName("sideText");
    text[0].style.fontWeight = 'bold';
    text[1].style.fontWeight = 'normal';
    text[2].style.fontWeight = 'normal';
}

function jumpManage() {
    document.getElementById("manage").style.backgroundColor = '#F2C94C';
    document.getElementById("check").style.backgroundColor = 'white';
    document.getElementById("unlock").style.backgroundColor = 'white';

    let text = document.getElementsByClassName("sideText");
    text[1].style.fontWeight = 'bold';
    text[0].style.fontWeight = 'normal';
    text[2].style.fontWeight = 'normal';
}

function jumpUnlock() {
    document.getElementById("unlock").style.backgroundColor = '#F2C94C';
    document.getElementById("manage").style.backgroundColor = 'white';
    document.getElementById("check").style.backgroundColor = 'white';

    let text = document.getElementsByClassName("sideText");
    text[2].style.fontWeight = 'bold';
    text[1].style.fontWeight = 'normal';
    text[0].style.fontWeight = 'normal';
}