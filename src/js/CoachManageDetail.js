import React from 'react';
import ReactDOM from 'react-dom';

import ali from '../assets/coach.png'
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

function CoachManageDetail() {

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
                <div className="content">
                    <img src={ali} className="avatar" alt="coach-avatar" />
                    <div className="club-info">
                        <img src={clubLogo} className="club-icon" alt="club-icon" />
                        <label className="club-name">club-name</label>
                    </div>
                    <div className="coach-info">
                        <ul>
                            <li className="icon-name"><label>{name}</label></li>
                            <li className="icon-gender"><label>{gender}</label></li>
                            <li className="icon-age"><label>{age}</label></li>
                            <li  className="icon-phone"><label>{phone}</label></li>
                            <li className="icon-comment"><label>{comment}</label></li>
                        </ul>
                    </div>
                    <div className="operation">
                        <button className="btn-assign"  onClick={()=>window.location.href = "/CoachManage/detail/assign"}>调遣</button>
                        <button className="btn-leave">离职</button>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )

    )
}

export default CoachManageDetail;

function jumpCheck() {

    window.location.href = "/CoachCheck";
}

function jumpUnlock() {

    window.location.href = "/TeachingManage";
}