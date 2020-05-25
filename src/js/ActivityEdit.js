import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/activityEdit.css'
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

class ActivityEdit extends Component{

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

    componentDidMount(){
        const dataId = this.props.location.query;
        let idInfo = {};
        idInfo["id"] = dataId.actId;
        this.setState(idInfo);
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
            let actInfo = {};
            actInfo["name"] = data.data.name;
            actInfo["location"] = data.data.location;
            actInfo["startTime"] = data.data.startTime.substr(0,10);
            actInfo["endTime"] = data.data.endTime.substr(0,10);
            actInfo["price"] = data.data.price;
            actInfo["courseDescription"] = data.data.courseDescription;
            actInfo["imgUrl"] = data.data.imgUrl;

            this.setState(actInfo);

        }).catch(function(error){
            console.log(error)
        })
    }

    getActPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("activityEditContent2PicChoose");
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
        document.getElementById("activityEditContent2Pic").src=allUrl;
        let newState = {};
        newState["imgUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    handleEditActivity=(type,event)=>{
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    }

    cancelActUpdate(){
        alert("已取消！！！");
        const dataId1 = this.props.location.query;
        let data = {
            actId: dataId1.actId
        }
        this.props.history.push({ pathname:'/ActivityDetail',query:data})
    }

    ensureActUpdate(){
        let newInfo = this.state;
        let info = JSON.stringify(newInfo);
        alert(info);
        fetch('/course-server/hastime/course/coach/offline',{
            method:'put',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
            body:`offlineCourse=${info}`
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            /*if(data.data=="success"){
                alert("更新成功");
                let data = {
                    clubId: dataId2.clubId
                }
                this.props.history.push({ pathname:'/ClubDetail',query:data})
            }
            else{
                alert("更新失败");
            }*/
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

                <div className = "activityEditContent">
                    <form className = "activityEditInfo">
                        <div className = "activityEditContent1">
                            <div className = "activityEditContent1Item" id="activityEditContent1Name">
                                <img src={lightCourseName} alt="address" className="activityEditContent1ItemLogo"/>
                                <label className = "activityEditContent1Label">活动名称：</label>
                                <input type="text" id="activityNameInput" value={this.state.name} onChange={this.handleEditActivity.bind(this,'name')}/>
                            </div>


                            <div className = "activityEditContent1Item" id="activityEditContent1Address">
                                <img src={cAddress} alt="address" className="activityEditContent1ItemLogo"/>
                                <label className = "activityEditContent1Label">活动地点：</label>
                                <input type="text" id="activityAddressInput" value={this.state.location} onChange={this.handleEditActivity.bind(this,'location')}/>
                            </div>

                            <div className = "activityEditContent1Item" id="activityEditContent1Time">
                                <img src={cTime} alt="address" className="activityEditContent1ItemLogo"/>
                                <label className = "activityEditContent1Label">有效期限：</label>
                                <div className="activityDateInfo">
                                    <input type="date" id="activityStartInput" value={this.state.startTime} onChange={this.handleEditActivity.bind(this,'startTime')}/>
                                    <text>——</text>
                                    <input type="date" id="activityEndInput" value={this.state.endTime} onChange={this.handleEditActivity.bind(this,'endTime')}/>
                                </div>
                            </div>



                            <div className = "activityEditContent1Item" id="activityEditContent1Dis">
                                <img src={cDisc} alt="discription" className="activityEditContent1ItemLogo"/>
                                <label className = "activityEditContent1Label">详细信息：</label>
                                <input type="text" id="activityDisInput" value={this.state.courseDescription} onChange={this.handleEditActivity.bind(this,'courseDescription')}/>
                            </div>

                            <div className = "activityEditContent1Item" id="activityEditContent1Reward">
                                <img src={reward} alt="discription" className="activityEditContent1ItemLogo"/>
                                <label className = "activityEditContent1Label">活动奖金：</label>
                                <input type="number" id="activityRewardInput" value={Number(this.state.price)} onChange={this.handleEditActivity.bind(this,'price')}/>
                            </div>



                        </div>

                        <div className = "activityEditContent2">
                            <div className = "activityEditContent2Item" id="activityEditContent2Pic">
                                <input type="file" name="sex" id="activityEditContent2PicChoose" value="" onChange={this.getActPicName.bind(this)}/>
                                <div className="activityEditContent2Img">
                                    <img src={this.state.imgUrl} alt="courseLogo" id="activityEditContent2Pic"/>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div className="activityEditContentButton">
                        <button id="activityEditContentButtonCancel" onClick={this.cancelActUpdate.bind(this)}>取消</button>
                        <button id="activityEditContentButtonSure" onClick={this.ensureActUpdate.bind(this)}>确认</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default ActivityEdit;
