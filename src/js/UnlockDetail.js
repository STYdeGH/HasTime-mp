import React from 'react'

import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/unlockDetail.css'
import logo from "../assets/logo.png";
import ali from '../assets/ali.jpg'
import lockLogo from '../assets/icon-lock.png'
import name from '../assets/icon-name.png'
import gender from '../assets/icon-gender.png'
import age from '../assets/icon-age.png'
import phone from '../assets/icon-phone.png'
import avatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";
import comment from "../assets/icon-comment.png";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

function UnlockDetail() {
    return(
        <div className="root">
            <div className="top-nav">
                <img src={logo} className="nav-logo" alt="logo" />
                <label className="nav-title">Has Time</label>
                <button className="btn-exit" onClick={()=>this.props.history.push("./coach_check")}>exit</button>
            </div>

            <div className="HeadSide">
                <img src={avatar} alt="admin" className="headAdmin" />

                <div className="adminInfo">
                    <img src={userLogo} alt="manage" className="adminLogo" />
                    <label className="adminName">admin-username</label>
                </div>

                <div className="sideItem" id="check" style={otherStyle} onClick={jumpCheck}>
                    <img src={checkLogo} alt="check-icon" className="sidePic" />
                    <label className="sideText">教练审核</label>
                </div>

                <div className="sideItem" id="manage" style={otherStyle} onClick={jumpManage}>
                    <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                    <label className="sideText">教练管理</label>
                </div>

                <div className="sideItem" id="unlock" style={chosenStyle}>
                    <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                    <label className="sideText" >教学管理</label>
                </div>

            </div>

            <div className = "content-unlock">
                <div className = "unlockDetails">
                    <div className = "unlockDetailImg">
                        <img src={ali} alt="course" className="unlockDetailPic"/>
                    </div>

                    <div className = "unlockDetailInfo">
                        <div className="unlockDetailItem" id="unlockDetailClub">
                            <img src={lockLogo} alt="name" className="unlockDetailItemLogo"/>
                            <text className="unlockDetailItemInfo">coach-name</text>
                        </div>

                        <div className="unlockDetailItem" id="unlockDetailName">
                            <img src={name} alt="name" className="unlockDetailItemLogo"/>
                            <text className="unlockDetailItemInfo">courseName</text>
                        </div>

                        <div className="unlockDetailItem" id="unlockDetailType">
                            <img src={gender} alt="type" className="unlockDetailItemLogo"/>
                            <text className="unlockDetailItemInfo">女</text>
                        </div>

                        <div className="unlockDetailItem" id="unlockDetailAddress">
                            <img src={age} alt="address" className="unlockDetailItemLogo"/>
                            <text className="unlockDetailItemInfo">42</text>
                        </div>


                        <div className="unlockDetailItem" id="unlockDetailTime">
                            <img src={phone} alt="time" className="unlockDetailItemLogo"/>
                            <text className="unlockDetailItemInfo">47835</text>
                        </div>

                        <div className="unlockDetailItem" id="btn-unlock">
                            <button className="btn-unlock">解绑</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UnlockDetail;

function jumpCheck() {
    window.location.href = "/CoachCheck";
}

function jumpManage() {
    window.location.href = "/CoachManage";
}

function jumpUnlock() {
    window.location.href = "/TeachingManage";
}