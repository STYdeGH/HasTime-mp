import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/activityManage.css'
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
import courseName from '../assets/courseName.png'
import courseType from '../assets/courseType.png'


import {white} from "color-name";

 class ActivityManage extends Component{
     constructor(props) {
         super(props);
         this.state = {
             actList:[]
         };
     }

     componentDidMount() {
         fetch('/course-server/hastime/course/coach/finishedOffline/33',{
             method: 'GET',
             mode: "cors",
             headers:{
                 'Content-Type': 'application/json;charset=UTF-8'
             }
         }).then(res => res.json())
             .then((data) => {
                 console.log(data);
                 this.setState({
                     actList: data.data,
                 });
                 console.log(this.state.actList);
             })
             .catch((error) => {
                 alert(error)
             })
     }

     handleActClick = (type, event) =>{
         if(type == "add"){
             this.props.history.push('/ActivityAdd');
         }
         else{
             let actId = type;
             //alert(clubId);
             let data = {
                 actId: actId
             }
             this.props.history.push({ pathname:'/ActivityDetail',query:data})
         }
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
         const activitys = this.state.actList;
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

            <div className = "main-activityContent">
                <div className="addNewActivity">
                    <button className="addNewActivityButton" onClick={this.handleActClick.bind(this,"add")}>添加新的活动</button>
                </div>

                <div className="activityList">
                    {activitys.map(actItem =>
                        <div className="activityItem" key={actItem.id.toString()} onClick={this.handleActClick.bind(this,actItem.id.toString())}>
                            <img src={actItem.imgUrl} alt="manageActivity" className="activityPic"/>
                            <div className="activityName">
                                <img src={manageAct} alt="name" className="activityNameLogo"/>
                                <text className="activityName">{actItem.name}</text>
                            </div>
                            <div className="activityType">
                                <img src={courseType} alt="type" className="activityTypeLogo"/>
                                <text className="activityType">{actItem.courseDescription}</text>
                            </div>
                        </div>
                    )}


                </div>

            </div>
        </div>

    )
}
}

export default ActivityManage;

