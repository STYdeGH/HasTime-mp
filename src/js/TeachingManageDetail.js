import React from 'react';
import ReactDOM from 'react-dom';

import ali from '../assets/ali.jpg'
import lockLogo from '../assets/icon-lock.png'
import clubLogo from '../assets/icon-club.png'
import Top from './Top';
import Left from './Left';
import '../css/detail.css'
import avatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";

let name = "张三";
let gender = "女";
let age = 25;
let phone = "8888888";
let comment = "瑜伽，塑身教练";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

function TeachingManageDetail() {

    return(
        ReactDOM.render(
            <React.StrictMode>
                <Top/>
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
                <div className="content">
                    <img src={ali} className="avatar" alt="coach-avatar" />
                    <div className="club-info">
                        <img src={lockLogo} className="club-icon" alt="club-icon" />
                        <label className="club-name">coach-name</label>
                    </div>
                    <div className="coach-info">
                        <ul>
                            <li className="icon-name"><label>{name}</label></li>
                            <li className="icon-gender"><label>{gender}</label></li>
                            <li className="icon-age"><label>{age}</label></li>
                            <li  className="icon-phone"><label>{phone}</label></li>
                        </ul>
                    </div>
                    <div className="operation">
                        <button className="btn-refuse">解绑</button>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )

    )
}

export default TeachingManageDetail;

function jumpCheck() {
    window.location.href = "/CoachCheck";
}

function jumpManage() {

    window.location.href = "/CoachManage";
}