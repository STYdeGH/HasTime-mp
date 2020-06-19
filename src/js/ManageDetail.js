import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/manageDetail.css'
import logo from "../assets/logo.png";
import starLogo from '../assets/icon-star.png'
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
import city from "../assets/address.png";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};
let star;

/*
 @description: 教练管理详情组件
 */
class ManageDetail extends React.Component{
    state = {
        coachInfo: {},
        studentIds: [],
        studentList: [],
        show: true,
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

    //加载教练信息和绑定学员信息
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

        //获取当前教练绑定学员列表
        fetch('/course-server/hastime/course/status/binding/coach?'+
            `coachId=${this.getQueryString("coachId")}`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let info = data.data;
                console.log('Success:', JSON.stringify(data));
                if(info == "" || info == null){
                    this.setState({
                        show: false,
                    });

                }else{
                    console.log(info);
                    this.setState({
                        studentIds: info,
                    });
                    fetch('/user-server/user/getNameAndAvatar?'
                        + `userid=${this.state.studentIds}`, {
                        method: 'GET',
                        headers:new Headers({
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }),
                    }).then(res => res.json())
                        .then((list) => {
                            console.log('Success:', JSON.stringify(list));
                            this.setState({
                                studentList: list.data,
                            });
                        })
                        .catch(error => console.error('Error:', error));
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

    jumpAssign = () => {
        window.location.href = "/CoachAssign?adminId="
            + this.getQueryString("adminId")
        + "&coachId=" + this.state.coachInfo.id;
    };

    //星级评定
    modifyStar = () => {
        star = this.input.value;
        fetch('/user-server/user/modifyCoachStar', {
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: `userid=${this.getQueryString("coachId")}&star=${star}`
        }).then(res => res.json())
            .then((data) => {
                let msg = data.data;
                if(msg){
                    window.location.reload();
                }
                else{
                    alert("操作失败，请稍后再试！")
                }
            });
    };

    //加载星级评定弹窗
    star = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='cui'>
                        <div className="tDiv">
                            <input id="star" required="required" type="text"
                                   placeholder=" &nbsp;&nbsp;&nbsp;&nbsp;请输入评定等级"
                                   ref={input => this.input = input} />
                            <button type="submit" onClick={() => {
                                this.modifyStar();
                                onClose();
                            }}>
                            </button>
                        </div>
                    </div>
                );
            }
        });
    };

    //加载确认离职弹窗
    leave = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <div className="titleDiv">
                            <h3 className="confirm-title">确认删除</h3>
                        </div>
                        <div className="contentDiv">
                            <p className="confirm-content">你确定要删除该教练吗?</p>
                        </div>

                        <div className="btnDiv">
                            <button onClick={onClose} className="can">取消</button>
                            <button className="del"
                                onClick={() => {
                                    this.handleClickDelete();
                                    onClose();
                                }}
                            >删除
                            </button>
                        </div>
                    </div>
                );
            }
        });

    };

    //删除教练
    handleClickDelete = ()=>{
        fetch('/user-server/web/coachLeaveGym', {
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: `coachID=${this.getQueryString("coachId")}`
        }).then(res => res.json())
            .then((data) => {
                let msg = data.data;
                if(msg){
                    alert("操作成功！");
                    window.location.href = "/CoachManage?adminId="
                        + this.getQueryString("adminId");
                }
                else{
                    alert("操作失败，请稍后再试！")
                }
            });
    };

    render() {
        let yes = {display: "inline"};
        let no = {display: 'none'};

        return(
            <div className="root">
                <div className="top-nav">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <label className="nav-title">Has Time</label>
                    <button className="btn-exit" onClick={()=>
                        window.location.href = "/"}>exit</button>
                </div>

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

                <div className = "content-manage">
                    <div className = "manageDetails">
                        <div className = "manageDetailImg">
                            <img src={this.state.coachInfo.avatarUrl}
                                 alt="coach-avatar" className="manageDetailPic"/>
                        </div>

                        <div className = "manageDetailInfo">
                            <div className="manageDetailItem" id="manageDetailClub">
                                <img src={starLogo} id="starLogo"
                                     alt="name" className="manageDetailItemLogo"/>
                                <text id="starText" className="manageDetailItemInfo">
                                    <i className="b">{this.state.coachInfo.star}</i> 级</text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailName">
                                <img src={name} alt="name" className="manageDetailItemLogo"/>
                                <label className="manageDetailItemInfo">
                                    {this.state.coachInfo.realName}
                                </label>
                            </div>

                            <div className="manageDetailItem" id="manageDetailTime">
                                <img src={phone} alt="time" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">
                                    {this.state.coachInfo.phone}
                                </text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailType">
                                <img src={gender} alt="type" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">
                                    {this.state.coachInfo.sex}
                                </text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailAddress">
                                <img src={age} alt="address" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">
                                    {this.state.coachInfo.age}岁
                                </text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailType">
                                <img src={city} alt="type" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">
                                    {this.state.coachInfo.city}
                                </text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailDis">
                                <img src={comment} alt="description" className="manageDetailItemLogo"/>
                                <text className="manageDetailItemInfo">
                                    {this.state.coachInfo.description}
                                </text>
                            </div>

                            <div className="manageDetailItem" id="manageDetailOpt">
                                <button className="btn-star" onClick={this.star.bind(this)}>
                                    星级评定
                                </button>
                                <button className="btn-assign"
                                        onClick={this.jumpAssign.bind(this)}>调 遣
                                </button>
                                <button className="btn-leave"
                                        onClick={this.leave.bind(this)}>离 职
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="coachList" >
                        <div className="prompt">
                            <text className="promptInfo">绑定学员列表</text>
                        </div>

                        <div className="splitArea">
                        </div>

                        <h3 className="comment" style={this.state.show ? no : yes}>
                            暂无绑定学员
                        </h3>
                        <div className="coaches">
                            {this.state.studentList.map(function(student) {
                                return(
                                    <div className="coachItem" key={student.userid}>
                                        <img src={student.avatarUrl} alt="student-avatar"
                                             className="coachItemLogo"/>
                                        <text className="coachItemName">{student.name}</text>
                                    </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ManageDetail;