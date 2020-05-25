import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/activityDetail.css'
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

import deleteTeach from '../assets/delate.png'
import {white} from "color-name";

class ActivityDetail extends Component{

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

    //组件一开始渲染的时候获取某活动的具体信息
    componentDidMount() {
        const dataId = this.props.location.query;
        //alert(dataId.clubId);
        fetch('/course-server/hastime/course/util/offline/'+dataId.actId,{
            method:'get',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data.data);
            //alert(JSON.stringify(data.data));
            let actInfo = {};
            actInfo["name"] = data.data.name;
            actInfo["location"] = data.data.location;
            actInfo["startTime"] = data.data.startTime;
            actInfo["endTime"] = data.data.endTime;
            actInfo["price"] = data.data.price;
            actInfo["courseDescription"] = data.data.courseDescription;
            actInfo["imgUrl"] = data.data.imgUrl;

            this.setState(actInfo);

        }).catch(function(error){
            console.log(error)
        })
    }

    toEditAct(){
        const dataId1 = this.props.location.query;
        let data = {
            actId: dataId1.actId
        }
        this.props.history.push({ pathname:'/ActivityEdit',query:data})
    }

    toDeleteAct(){
        const dataId2 = this.props.location.query;
        //删除一个特定的活动
        fetch('/course-server/hastime/course/coach/'+dataId2.actId,{
            method:'delete',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data.data);
            alert("删除成功");
            this.props.history.push('/ActivityManage');
        }).catch(function(error){
            console.log(error)
        })
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

                <div className = "mainActivityContent">
                    <div className = "activityDetails">
                        <div className = "activityDetailImg">
                            <img src={this.state.imgUrl} alt="course" className="activityDetailPic"/>
                        </div>

                        <div className = "activityDetailInfo">

                            <div className="activityDetailItem" id="activityDetailName">
                                <img src={manageAct} alt="name" className="activityDetailItemLogo"/>
                                <text className="activityDetailItemInfo">{this.state.name}</text>
                            </div>


                            <div className="activityDetailItem" id="activityDetailAddress">
                                <img src={cAddress} alt="address" className="activityDetailItemLogo"/>
                                <text className="activityDetailItemInfo">{this.state.location}</text>
                            </div>


                            <div className="activityDetailItem" id="activityDetailTime">
                                <img src={cTime} alt="time" className="activityDetailItemLogo"/>
                                <text className="activityDetailItemInfo">{this.state.startTime}~{this.state.endTime}</text>
                            </div>

                            <div className="activityDetailItem" id="activityDetailDis">
                                <img src={cDisc} alt="discription" className="activityDetailItemLogo"/>
                                <text className="activityDetailItemInfo">{this.state.courseDescription}</text>
                            </div>

                            <div className="activityDetailItem" id="activityDetailReward">
                                <img src={reward} alt="reward" className="activityDetailItemLogo"/>
                                <text className="activityDetailItemInfo">{this.state.price}</text>
                            </div>

                            <div className="activityDetailItem" id="detailOpt">
                                <button className="activityDetailButton" id="activityButtonEdit" onClick={this.toEditAct.bind(this)}>编辑</button>
                                <button className="activityDetailButton" id="activityButtonDelete" onClick={this.toDeleteAct.bind(this)}>删除</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default ActivityDetail;
