import React from 'react';
import ReactDOM from 'react-dom';

import Top from './Top';
import adminAvatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";
import '../css/headSide.css'
import '../css/coachList.css'

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};
let adminId;

class CoachManage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            coachList: [],
            name: "",
        };
    }


    componentDidMount() {
        adminId = this.getQueryString("adminId");
        fetch('/user-server/web/getCoachsByAdminIdAndState?'+
            `adminId=${this.getQueryString("adminId")}&state=2`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let list = data.data;
                console.log('Success:', JSON.stringify(data));
                if(list == "" || list == null){
                    alert("该俱乐部暂无教练");

                }else{
                    this.setState({
                        coachList: list,
                    });

                }

            })
            .catch(error => console.error('Error:', error));


    };

    componentWillUnmount = () => {
        this.setState = (state, callback)=>{
            return;
        };
    };

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

    jumpUnlock = () => {
        window.location.href = "/TeachingManage?adminId=" + this.getQueryString("adminId");
    };

    handleInput = (type, event) => {
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);

    };

    search = () => {
        if(this.state.name == ''){
            alert("请输入教练姓名");
        }
        else {
            fetch('/user-server/web/getCoachsByAdminIdAndStateAndName?'+
                `adminID=${this.getQueryString("adminId")}&state=2&coachName=${this.state.name}`, {
                method: 'GET',
                headers:new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            }).then(res => res.json())
                .then((data) => {
                    let list = data.data;
                    console.log('Success:', JSON.stringify(data));
                    if(list == "" || list == null){
                        alert("未找到相关信息");

                    }else{
                        this.setState({
                            coachList: list,
                        });

                    }

                })
                .catch(error => console.error('Error:', error));
        }
    };

    render() {
        return(
            <div className="root">
                <Top />
                <div className="HeadSide">
                    <img src={adminAvatar} alt="admin" className="headAdmin" />

                    <div className="adminInfo">
                        <img src={userLogo} alt="manage" className="adminLogo" />
                        <label className="adminName">admin</label>
                    </div>

                    <div className="sideItem" id="check" onClick={this.jumpCheck.bind(this)} style={otherStyle}>
                        <img src={checkLogo} alt="check-icon" className="sidePic" />
                        <label className="sideText">教练审核</label>
                    </div>

                    <div className="sideItem" id="manage" style={chosenStyle}>
                        <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                        <label className="sideText">教练管理</label>
                    </div>

                    <div className="sideItem" id="unlock" style={otherStyle}
                         onClick={this.jumpUnlock.bind(this)}>
                        <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                        <label className="sideText" >教学管理</label>
                    </div>

                </div>
                <div className="content" id="content">
                    <div className="search-bar">
                        <input type="text" placeholder="请输入您要搜索的教练姓名..."
                               value={this.state.name} onChange={this.handleInput.bind(this, 'name')}/>
                        <button type="submit" onClick={this.search.bind(this)}></button>
                    </div>

                    <div className="list-coaches">
                        {this.state.coachList.map((coach) => (
                            <div className="listItem"  key={coach.id}
                                 onClick={()=>window.location.href = "/CoachManageDetail?adminId="
                                     + adminId + "&coachId=" + coach.id}>
                                <img src={coach.avatarUrl}  className="coach-pic" alt="coach-avatar" />
                                <label className="coach-name">{coach.realName}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default CoachManage;
