import React from 'react';

import Top from './Top';
import StudentList from "./StudentList";
import avatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};
/*
 @description: 学员管理列表组件
 */
class TeachingManage extends React.Component{
    //获取url中的参数
    getQueryString = (name) => {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    jumpCheck = ()=> {

        window.location.href = "/CoachCheck?adminId=" + this.getQueryString("adminId");
    };

    jumpManage = () => {

        window.location.href = "/CoachManage?adminId=" + this.getQueryString("adminId");
    };

    render() {
        return(
            <div className="root">
                    <Top />
                    <div className="HeadSide">
                        <img src={avatar} alt="admin" className="headAdmin" />

                        <div className="adminInfo">
                            <img src={userLogo} alt="manage" className="adminLogo" />
                            <label className="adminName">admin</label>
                        </div>

                        <div className="sideItem" id="check" style={otherStyle} onClick={this.jumpCheck.bind(this)}>
                            <img src={checkLogo} alt="check-icon" className="sidePic" />
                            <label className="sideText">教练审核</label>
                        </div>

                        <div className="sideItem" id="manage" style={otherStyle} onClick={this.jumpManage.bind(this)}>
                            <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                            <label className="sideText">教练管理</label>
                        </div>

                        <div className="sideItem" id="unlock" style={chosenStyle}>
                            <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                            <label className="sideText" >教学管理</label>
                        </div>

                    </div>
                    <StudentList/>
            </div>
        )
    }

}

export default TeachingManage;
