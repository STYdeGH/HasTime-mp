import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/activityAdd.css'
import headadmin from '../assets/headadmin.jpg'
import manageClub from '../assets/manageClub.png'
import manageCourse from '../assets/manageCourse.png'
import manageMenu from '../assets/manageMenu.png'
import manageAct from '../assets/manageAct.png'
import manage from '../assets/guanli.png'
import logo from '../assets/logo.png'
import club from '../assets/timg.jpg'
import address from '../assets/address.png'
import name from '../assets/name.png'
import cName from '../assets/cName.png'
import cPhone from '../assets/cPhone.png'
import cEmail from '../assets/cEmail.png'
import cTime from '../assets/cTime.png'
import cAddress from '../assets/cAddress.png'
import cDisc from '../assets/cDisc.png'
import lightCourseName from '../assets/lightCourseName.png'
import lightCourseType from '../assets/lightCourseType.png'
import reward from '../assets/reward.png'
import cAdmin from '../assets/cAdmin.png'
import {white} from "color-name"

class ActivityAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            calorie:0,
            coachId:33,//教练
            commentList:[],
            commentNumber:0,
            commentScore:0,
            courseDescription:"",//描述
            deadline:"",
            endTime:"",//结束
            frequency:0,
            id:0,
            imgUrl:"",//image
            location:"",//地点
            maxNumber:0,
            name:"",//名称
            participants:0,
            price:0,//奖金
            startTime:"",//开始事件
            tagList:[],
            totalDuration:0,
            traineeList:[]
        };
    }

    handleAddAct=(type,event)=>{
        if(type == "save"){
            var fd = new FormData();
            let upInfo = {};
            upInfo = this.state;
            let info = JSON.stringify(upInfo);
            //alert(info);
            fetch('/course-server/hastime/course/coach/offline',{
                method:'post',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型*/
                },
                body:`offlineCourse=${info}`
            }).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data);
                alert("添加成功");
            }).catch(function(error){
                console.log(error)
            })
        }
        else{
            document.getElementById("activityAddNameInput").value = "";
            document.getElementById("activityAddAddressInput").value = "";
            document.getElementById("activityAddStartInput").value = "";
            document.getElementById("activityAddEndInput").value = "";
            document.getElementById("activityAddDisInput").value = "";
            document.getElementById("activityAddRewardInput").value = "";
        }

    }

    getActPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("activityAddContent2PicChoose");
        let agent = navigator.userAgent;
        if (agent.indexOf("MSIE")>=1) {
            url = file.value;
        } else if(agent.indexOf("Firefox")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        } else if(agent.indexOf("Chrome")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        }
        let fileName = file.files.item(0).name;
        let allUrl = cloudUrl+fileName
        document.getElementById("activityAddContent2Pic").src=allUrl;
        let newState = {};
        newState["imgUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    handleAddActivity=(type,event)=>{
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    }

    jumpClub(){
        this.props.history.push('/ClubManage');
    }

    jumpCourse(){
        this.props.history.push('/CourseManage');
    }

    jumpAct(){
        this.props.history.push('/ActivityManage');
    }

    jumpMenu(){
        this.props.history.push('/MenuManage');
    }

    render(){
        return(
            <div className="root">
                <div className="top-nav">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <label className="nav-title">Has Time</label>
                    <button className="btn-exit" onClick={()=>this.props.history.push("/SignIn")}>exit</button>
                </div>

                <div className="HeadSide">
                    <img src={headadmin} alt="admin" className="headAdmin"/>

                    <div className="adminInfo">
                        <img src={manage} alt="manage" className="adminLogo"/>
                        <text className="adminName">admin</text>
                    </div>

                    <div className="sideItem" style={{marginTop:'5%',backgroundColor:'white'}} onClick={this.jumpClub.bind(this)}>
                        <img src={manageClub} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>俱乐部管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'white'}} onClick={this.jumpMenu.bind(this)}>
                        <img src={manageMenu} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>食谱管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'#F2C94C'}} onClick={this.jumpAct.bind(this)}>
                        <img src={manageAct} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'bold'}}>活动管理</text>
                    </div>

                </div>

                <div className = "activityAddContent">
                    <form className = "activityAddInfo">
                        <div className = "activityAddContent1">
                            <div className = "activityAddContent1Item" id="activityAddContent1Name">
                                <img src={lightCourseName} alt="address" className="activityAddContent1ItemLogo"/>
                                <label className = "activityAddContent1Label">活动名称：</label>
                                <input type="text" id="activityAddNameInput" value={this.state.name} onChange={this.handleAddActivity.bind(this,'name')}/>
                            </div>



                            <div className = "activityAddContent1Item" id="activityAddContent1Address">
                                <img src={cAddress} alt="address" className="activityAddContent1ItemLogo"/>
                                <label className = "activityAddContent1Label">活动地点：</label>
                                <input type="text" id="activityAddAddressInput" value={this.state.location} onChange={this.handleAddActivity.bind(this,'location')}/>
                            </div>

                            <div className = "activityAddContent1Item" id="activityAddContent1Time">
                                <img src={cTime} alt="address" className="activityAddContent1ItemLogo"/>
                                <label className = "activityAddContent1Label">有效期限：</label>
                                <div className="activityAddDateInfo">
                                    <input type="date" id="activityAddStartInput" value={this.state.startTime} onChange={this.handleAddActivity.bind(this,'startTime')}/>
                                    <text>——</text>
                                    <input type="date" id="activityAddEndInput" value={this.state.endTime} onChange={this.handleAddActivity.bind(this,'endTime')}/>
                                </div>
                            </div>

                            <div className = "activityAddContent1Item" id="activityAddContent1Dis">
                                <img src={cDisc} alt="discription" className="activityAddContent1ItemLogo"/>
                                <label className = "activityAddContent1Label">详细信息：</label>
                                <input type="text" id="activityAddDisInput" value={this.state.courseDescription} onChange={this.handleAddActivity.bind(this,'courseDescription')}/>
                            </div>

                            <div className = "activityAddContent1Item" id="activityAddContent1Reward">
                                <img src={reward} alt="discription" className="activityAddContent1ItemLogo"/>
                                <label className = "activityAddContent1Label">活动奖金：</label>
                                <input type="text" id="activityAddRewardInput" value={this.state.price} onChange={this.handleAddActivity.bind(this,'price')}/>
                            </div>



                        </div>

                        <div className = "activityAddContent2">
                            <div className = "activityAddContent2Item" id="activityAddContent2Pic">
                                <input type="file" name="sex" id="activityAddContent2PicChoose" value="" onChange={this.getActPicName.bind(this)}/>
                                <div className="activityAddContent2Img">
                                    <img src={this.state.imgUrl} alt="courseLogo" id="activityAddContent2Pic"/>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div className="activityAddContentButton">
                        <button id="activityAddContentButtonCancel" onClick={this.handleAddAct.bind(this,'cancel')}>取消</button>
                        <button id="activityAddContentButtonSure" onClick={this.handleAddAct.bind(this,'save')}>确认</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default ActivityAdd;

