import React from 'react'
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/manageDetail.css'
import logo from "../assets/logo.png";
import ali from '../assets/coach.png'
import clubLogo from '../assets/icon-club.png'
import name from '../assets/icon-name.png'
import gender from '../assets/icon-gender.png'
import age from '../assets/icon-age.png'
import phone from '../assets/icon-phone.png'
import comment from '../assets/icon-comment.png'
import avatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

function ManageDetail() {
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

                <div className="sideItem" id="manage" style={chosenStyle}>
                    <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                    <label className="sideText">教练管理</label>
                </div>

                <div className="sideItem" id="unlock" style={otherStyle} onClick={jumpUnlock}>
                    <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                    <label className="sideText" >教学管理</label>
                </div>

            </div>

            <div className = "content-manage">
                <div className = "manageDetails">
                    <div className = "manageDetailImg">
                        <img src={ali} alt="course" className="manageDetailPic"/>
                    </div>

                    <div className = "manageDetailInfo">
                        <div className="manageDetailItem" id="manageDetailClub">
                            <img src={clubLogo} alt="name" className="manageDetailItemLogo"/>
                            <text className="manageDetailItemInfo">club-name</text>
                        </div>

                        <div className="manageDetailItem" id="manageDetailName">
                            <img src={name} alt="name" className="manageDetailItemLogo"/>
                            <text className="manageDetailItemInfo">courseName</text>
                        </div>

                        <div className="manageDetailItem" id="manageDetailType">
                            <img src={gender} alt="type" className="manageDetailItemLogo"/>
                            <text className="manageDetailItemInfo">女</text>
                        </div>

                        <div className="manageDetailItem" id="manageDetailAddress">
                            <img src={age} alt="address" className="manageDetailItemLogo"/>
                            <text className="manageDetailItemInfo">42</text>
                        </div>


                        <div className="manageDetailItem" id="manageDetailTime">
                            <img src={phone} alt="time" className="manageDetailItemLogo"/>
                            <text className="manageDetailItemInfo">47835</text>
                        </div>

                        <div className="manageDetailItem" id="manageDetailDis">
                            <img src={comment} alt="description" className="manageDetailItemLogo"/>
                            <text className="manageDetailItemInfo">纳粹德军拉萨好肥啊飞机克里夫heal</text>
                        </div>
                    </div>
                </div>

                <div className="manageOperation">
                    <button className="btn-assign"  onClick={()=>window.location.href = "/CoachAssign"}>调 遣</button>
                    <button className="btn-leave">离 职</button>
                </div>

            </div>
        </div>
    )
}

export default ManageDetail

function jumpCheck() {
    window.location.href = "/CoachCheck";
}

function jumpManage() {
    window.location.href = "/CoachManage";
}

function jumpUnlock() {
    window.location.href = "/TeachingManage";
}