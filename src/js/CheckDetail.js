import React from 'react';
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
import Top from "./Top";
import '../css/headSide.css'
import '../css/checkDetail.css'

let firstStyle = {marginTop:'5%',backgroundColor: '#F2C94C'};
let otherStyle = {backgroundColor:'white'};
let otherTextStyle = {fontWeight: 'normal'};

function CheckDetail() {
    return(
        <div className="root">
            <Top/>
            <div className="HeadSide">
                <img src={avatar} alt="admin" className="headAdmin" />

                <div className="adminInfo">
                    <img src={userLogo} alt="manage" className="adminLogo" />
                    <label className="adminName">admin-username</label>
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
            <div className="content-check">
                <div className = "checkDetails">
                    <div className = "checkDetailImg">
                        <img src={ali} alt="course" className="checkDetailPic"/>
                    </div>

                    <div className = "checkDetailInfo">
                        <div className="checkDetailItem" id="checkDetailClub">
                            <img src={clubLogo} alt="name" className="checkDetailItemLogo"/>
                            <text className="checkDetailItemInfo">club-name</text>
                        </div>

                        <div className="checkDetailItem" id="checkDetailName">
                            <img src={name} alt="name" className="checkDetailItemLogo"/>
                            <text className="checkDetailItemInfo">courseName</text>
                        </div>

                        <div className="checkDetailItem" id="checkDetailType">
                            <img src={gender} alt="type" className="checkDetailItemLogo"/>
                            <text className="checkDetailItemInfo">女</text>
                        </div>

                        <div className="checkDetailItem" id="checkDetailAddress">
                            <img src={age} alt="address" className="checkDetailItemLogo"/>
                            <text className="checkDetailItemInfo">42</text>
                        </div>


                        <div className="checkDetailItem" id="checkDetailTime">
                            <img src={phone} alt="time" className="checkDetailItemLogo"/>
                            <text className="checkDetailItemInfo">47835</text>
                        </div>

                        <div className="checkDetailItem" id="checkDetailDis">
                            <img src={comment} alt="discription" className="checkDetailItemLogo"/>
                            <text className="checkDetailItemInfo">纳粹德军拉萨好肥啊飞机克里夫heal</text>
                        </div>
                    </div>
                </div>

                <div className="checkOperation">
                    <button className="btn-pass">通 过</button>
                    <button className="btn-refuse">拒 绝</button>
                </div>
            </div>
        </div>
    )
}
export default CheckDetail;

function jumpCheck() {
    window.location.href = "/CoachCheck";
}

function jumpManage() {
    window.location.href = "/CoachManage";
}

function jumpUnlock() {
    window.location.href = "/TeachingManage";
}