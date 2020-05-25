import React from 'react';
import ali from '../assets/coach.png'
import clubLogo from '../assets/icon-club.png'
import name from '../assets/icon-name.png'
import city from '../assets/address.png'
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
import gender from "../assets/icon-gender.png";

let firstStyle = {marginTop:'5%',backgroundColor: '#F2C94C'};
let otherStyle = {backgroundColor:'white'};
let otherTextStyle = {fontWeight: 'normal'};

class CheckDetail extends React.Component{
    state = {
        coachInfo: {},
    };

    getQueryString = (name) => {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    componentWillMount() {
        fetch('/user-server/web/getCoachInfoByID?'+
            `userID=${this.getQueryString("coachId")}`, {
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
                        coachInfo: info,
                    });

                }

            })
            .catch(error => console.error('Error:', error));

    };

    jumpCheck = ()=> {

        window.location.href = "/CoachCheck?adminId=" + this.getQueryString("adminId");
    };

    jumpManage = () => {

        window.location.href = "/CoachManage?adminId=" + this.getQueryString("adminId");
    };

    jumpUnlock = () => {

        window.location.href = "/TeachingManage?adminId=" + this.getQueryString("adminId");
    };

    pass = () => {
        fetch('/user-server/web/passCoach',{
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: `coachID=${this.getQueryString("coachId")}`,
        }).then(response => response.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                let msg = response.data;
                if(msg) {
                    alert("操作成功！");
                    window.location.href = "/CoachCheck?adminId=" + this.getQueryString("adminId");
                }
            })
            .catch(error => console.error('Error:', error));
    };

    refuse = () => {
        fetch('/user-server/web/rejectCoach',{
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: `coachID=${this.getQueryString("coachId")}`,
        }).then(response => response.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                let msg = response.data;
                if(msg) {
                    alert("操作成功！");
                    window.location.href = "/CoachCheck?adminId="
                        + this.getQueryString("adminId");
                }
            })
            .catch(error => console.error('Error:', error));
    };

    render() {
        return(
            <div className="root">
                <Top/>
                <div className="HeadSide">
                    <img src={avatar} alt="admin" className="headAdmin" />

                    <div className="adminInfo">
                        <img src={userLogo} alt="manage" className="adminLogo" />
                        <label className="adminName">admin</label>
                    </div>

                    <div className="sideItem" id="check" style={firstStyle}
                         onClick={this.jumpCheck.bind(this)}>
                        <img src={checkLogo} alt="check-icon" className="sidePic" />
                        <label className="sideText">教练审核</label>
                    </div>

                    <div className="sideItem" id="manage" style={otherStyle}
                         onClick={this.jumpManage.bind(this)}>
                        <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                        <label className="sideText" style={otherTextStyle}>教练管理</label>
                    </div>

                    <div className="sideItem" id="unlock" style={otherStyle}
                         onClick={this.jumpUnlock.bind(this)}>
                        <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                        <label className="sideText" style={otherTextStyle}>教学管理</label>
                    </div>
                </div>
                <div className="content-check">
                    <div className = "checkDetails">
                        <div className = "checkDetailImg">
                            <img src={this.state.coachInfo.avatarUrl} alt="coach-avatar" className="checkDetailPic"/>
                        </div>

                        <div className="block"></div>

                        <div className = "checkDetailInfo">


                            <div className="checkDetailItem" id="checkDetailName">
                                <img src={name} alt="name" className="checkDetailItemLogo"/>
                                <text className="checkDetailItemInfo">{this.state.coachInfo.nickname}</text>
                            </div>

                            <div className="checkDetailItem" id="checkDetailTime">
                                <img src={phone} alt="time" className="checkDetailItemLogo"/>
                                <text className="checkDetailItemInfo">{this.state.coachInfo.phone}</text>
                            </div>

                            <div className="checkDetailItem" id="checkDetailGender">
                                <img src={gender} alt="type" className="checkDetailItemLogo"/>
                                <text className="checkDetailItemInfo">{this.state.coachInfo.sex}</text>
                            </div>

                            <div className="checkDetailItem" id="checkDetailAddress">
                                <img src={age} alt="address" className="checkDetailItemLogo"/>
                                <text className="checkDetailItemInfo">{this.state.coachInfo.age} 岁</text>
                            </div>

                            <div className="checkDetailItem" id="checkDetailType">
                                <img src={city} alt="type" className="checkDetailItemLogo"/>
                                <text className="checkDetailItemInfo">{this.state.coachInfo.city}</text>
                            </div>

                            <div className="checkDetailItem" id="checkDetailDis">
                                <img src={comment} alt="discription" className="checkDetailItemLogo"/>
                                <text className="checkDetailItemInfo">{this.state.coachInfo.description}</text>
                            </div>
                        </div>
                    </div>

                    <div className="checkOperation">
                        <button className="btn-pass" onClick={this.pass}>通 过</button>
                        <button className="btn-refuse"  onClick={this.refuse}>拒 绝</button>
                    </div>
                </div>
            </div>
        )
    }

}
export default CheckDetail;
