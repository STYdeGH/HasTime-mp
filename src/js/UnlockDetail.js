import React from 'react'

import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/unlockDetail.css'
import logo from "../assets/logo.png"
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
import city from "../assets/address.png";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

/*
 @description: 学员管理详情组件
 */
class UnlockDetail extends React.Component{
    state = {
        studentInfo: {},
        coachName: "",
        showBtn: true,
    };

    //获取url中的参数
    getQueryString = (name) => {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    //加载学员信息
    componentWillMount() {
        //获取学员绑定的教练信息
        fetch('/course-server/hastime/course/status/binding?'
            + `userIds=${this.getQueryString("studentId")}`,{
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),

        }).then(response => response.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                let id = response.data;
                if(id == -1) {
                    this.setState({
                        coachName: "暂无绑定教练",
                        showBtn: false,
                    });
                }
                else{
                    fetch('/user-server/web/getCoachInfoByID?'+
                        `userID=${id}`, {
                        method: 'GET',
                        headers:new Headers({
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }),
                    }).then(res => res.json())
                        .then((data) => {
                            let info = data.data;
                            console.log('Success:', JSON.stringify(data));
                            if(info == "" || info == null){
                                alert("该教练暂无信息");

                            }else{
                                this.setState({
                                    coachName: info.realName,
                                });

                            }

                        })
                        .catch(error => console.error('Error:', error));
                }
            })
            .catch(error => console.error('Error:', error));

        //获取学员具体信息
        fetch('/user-server/web/getCoachInfoByID?'+
            `userID=${this.getQueryString("studentId")}`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let info = data.data;
                console.log('Success:', JSON.stringify(data));
                if(info == "" || info == null){
                    alert("该学员暂无信息");

                }else{
                    this.setState({
                        studentInfo: info,
                    });

                }

            })
            .catch(error => console.error('Error:', error));

    };

    jumpCheck = ()=> {
        window.location.href = "/CoachCheck?adminId="
            + this.getQueryString("adminId");
    };

    jumpManage = () => {
        window.location.href = "/CoachManage?adminId="
            + this.getQueryString("adminId");
    };

    jumpUnlock = () => {
        window.location.href = "/TeachingManage?adminId="
            + this.getQueryString("adminId");
    };

    //解绑
    unlock = () => {
        fetch('/course-server/hastime/course/status/binding?'
            + `studentId=${this.getQueryString("studentId")}`,{
            method: 'DELETE',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            //body: `studentId=${this.getQueryString("studentId")}`,
        }).then(response => response.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                let msg = response.data;
                if(msg) {
                    alert("操作成功！");
                    window.location.reload();
                }
            })
            .catch(error => console.error('Error:', error));
    };

    render() {
        let show = {display: "inline"};
        let hide = {display: "none"};
        return(
            <div className="root">
                <div className="top-nav">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <label className="nav-title">Has Time</label>
                    <button className="btn-exit" onClick={() =>
                        window.location.href = "/"}>exit</button>
                </div>

                <div className="HeadSide">
                    <img src={avatar} alt="admin" className="headAdmin" />

                    <div className="adminInfo">
                        <img src={userLogo} alt="manage" className="adminLogo" />
                        <label className="adminName">admin</label>
                    </div>

                    <div className="sideItem" id="check" style={otherStyle}
                         onClick={this.jumpCheck}>
                        <img src={checkLogo} alt="check-icon" className="sidePic" />
                        <label className="sideText">教练审核</label>
                    </div>

                    <div className="sideItem" id="manage" style={otherStyle}
                         onClick={this.jumpManage}>
                        <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                        <label className="sideText">教练管理</label>
                    </div>

                    <div className="sideItem" id="unlock" style={chosenStyle}
                         onClick={this.jumpUnlock}>
                        <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                        <label className="sideText" >教学管理</label>
                    </div>

                </div>

                <div className = "content-unlock">
                    <div className = "unlockDetails">
                        <div className = "unlockDetailImg">
                            <img src={this.state.studentInfo.avatarUrl} alt="student-avatar"
                                 className="unlockDetailPic"/>
                        </div>

                        <div className = "unlockDetailInfo">
                            <div className="unlockDetailItem" id="unlockDetailClub">
                                <img src={lockLogo} alt="name" className="unlockDetailItemLogo"/>
                                <text className="unlockDetailItemInfo">
                                    {this.state.coachName}
                                </text>
                            </div>

                            <div className="unlockDetailItem" id="unlockDetailName">
                                <img src={name} alt="name" className="unlockDetailItemLogo"/>
                                <text className="unlockDetailItemInfo">
                                    {this.state.studentInfo.nickname}
                                </text>
                            </div>

                            <div className="unlockDetailItem" id="unlockDetailTime">
                                <img src={phone} alt="time" className="unlockDetailItemLogo"/>
                                <text className="unlockDetailItemInfo">
                                    {this.state.studentInfo.phone}
                                </text>
                            </div>

                            <div className="unlockDetailItem" id="unlockDetailType">
                                <img src={gender} alt="type" className="unlockDetailItemLogo"/>
                                <text className="unlockDetailItemInfo">
                                    {this.state.studentInfo.sex}
                                </text>
                            </div>

                            <div className="unlockDetailItem" id="unlockDetailAddress">
                                <img src={age} alt="address" className="unlockDetailItemLogo"/>
                                <text className="unlockDetailItemInfo">
                                    {this.state.studentInfo.age}
                                </text>
                            </div>

                            <div className="unlockDetailItem" id="unlockDetailCity">
                                <img src={city} alt="city" className="unlockDetailItemLogo"/>
                                <text className="unlockDetailItemInfo">
                                    {this.state.studentInfo.city}
                                </text>
                            </div>


                            <div className="unlockDetailItem" id="btn-unlock"
                                 style={this.state.showBtn ? show : hide}>
                                <button className="btn-unlock" onClick={this.unlock}>解绑</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UnlockDetail;
