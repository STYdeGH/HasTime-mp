import React from 'react';
import clubLogo from '../assets/icon-club.png'
import avatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";
import name from '../assets/icon-name.png'
import gender from '../assets/icon-gender.png'
import age from '../assets/icon-age.png'
import phone from '../assets/icon-phone.png'
import comment from '../assets/icon-comment.png'
import Top from './Top';
import '../css/coachAssign.css'

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

/*
 @description: 教练调遣组件
 */
class CoachAssign extends React.Component{
    state = {
        coachInfo: {},
        clubList: [],
        club: -1,
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

    //加载教练信息和俱乐部信息
    componentWillMount() {
        //获取教练详细信息
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

        //获取教练可被调遣的其他俱乐部列表
        fetch('/user-server/web/getOtherGyms?'+
            `adminID=${this.getQueryString("adminId")}`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let list = data.data;
                console.log('Success:', JSON.stringify(data));
                if(list == "" || list == null){
                    alert("暂无其他俱乐部");

                }else{
                    this.setState({
                        clubList: list,
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

    handleInput = (type, event) => {
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    };

    //调遣教练到其他俱乐部
    assign = () => {
        console.log(this.state.club);
        fetch('/user-server/web/coachChangeGym',{
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: `coachID=${this.getQueryString("coachId")}&gymID=${this.state.club}`,
        }).then(response => response.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                let msg = response.data;
                if(msg) {
                    alert("操作成功！");
                    window.location.href = "/CoachManage?adminId="
                        + this.getQueryString("adminId");
                }
                else{
                    alert("操作失败，请稍后再试！")
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

                    <div className="sideItem" id="check" style={otherStyle}
                         onClick={this.jumpCheck.bind(this)}>
                        <img src={checkLogo} alt="check-icon" className="sidePic" />
                        <label className="sideText">教练审核</label>
                    </div>

                    <div className="sideItem" id="manage" style={chosenStyle}
                         onClick={this.jumpManage.bind(this)}>
                        <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                        <label className="sideText">教练管理</label>
                    </div>

                    <div className="sideItem" id="unlock" style={otherStyle}
                         onClick={this.jumpUnlock.bind(this)}>
                        <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                        <label className="sideText" >教学管理</label>
                    </div>

                </div>
                <div className="content-assign">
                    <div className = "assignDetails">
                        <div className = "manageDetailImg">
                            <img src={this.state.coachInfo.avatarUrl} alt="coach-avatar"
                                 className="manageDetailPic"/>
                        </div>

                        <div className = "manageDetailInfo">
                            <div className="manageDetailItem" id="manageDetailClub">
                                <img src={clubLogo} alt="name" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">club-name</text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailName">
                                <img src={name} alt="name" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">{this.state.coachInfo.realName}</text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailType">
                                <img src={gender} alt="type" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">{this.state.coachInfo.city}</text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailAddress">
                                <img src={age} alt="address" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">{this.state.coachInfo.level}</text>
                            </div>


                            <div className="manageDetailItem" id="manageDetailTime">
                                <img src={phone} alt="time" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">{this.state.coachInfo.phone}</text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailDis">
                                <img src={comment} alt="description" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">{this.state.coachInfo.description}</text>
                            </div>
                        </div>
                    </div>
                    <div className="operation">
                        <select value={this.state.club} onChange={this.handleInput.bind(this, 'club')}>
                            {
                                this.state.clubList.map(function (club) {
                                    return(
                                        <option value={club.id} key={club.id}>{club.name}</option>
                                    )
                                })
                            }
                        </select>
                        <button className="btn-yes" onClick={this.assign.bind(this)}>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoachAssign;

function jumpCheck() {

    window.location.href = "/CoachCheck";
}

function jumpManage() {

    window.location.href = "/CoachManage";
}

function jumpUnlock() {

    window.location.href = "/TeachingManage";
}