import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/clubAdd.css'
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
import cAdmin from '../assets/cAdmin.png'
import {white} from "color-name";

class ClubAdd extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            phone:"",
            email:"",
            businessTime:"",
            address:"",
            description:"",
            pictureUrl:"http://qalt8ssmf.bkt.clouddn.com/club1.jpg"
        };
    }

    handleClubAddClick=(type,event)=>{
        if(type == "save"){
            let name = this.state.name;
            let phone = this.state.phone;
            let email = this.state.email;
            let businessTime = this.state.businessTime;
            let address = this.state.address;
            let description = this.state.description;
            let pictureUrl = this.state.pictureUrl;
            fetch('/user-server/web/addClub',{
                method:'post',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
                },
                body:`name=${name}&phone=${phone}&email=${email}&businessTime=${businessTime}&address=${address}&description=${description}&pictureUrl=${pictureUrl}`
            }).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data)
                if(data.data=="success"){
                    alert("添加成功");
                }
                else{
                    alert("添加失败");
                }
            }).catch(function(error){
                console.log(error)
            })
        }
        else{
            document.getElementById("nameInput").value = "";
            document.getElementById("phoneInput").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("timeInput").value = "";
            document.getElementById("addressInput").value = "";
            document.getElementById("disInput").value = "";
        }

    }

    getPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("clubAddContent2PicChoose");
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
        document.getElementById("clubAddContent2Pic").src=allUrl;
        let newState = {};
        newState["pictureUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    handleAddClub=(type,event)=>{
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

                    <div className="sideItem" style={{marginTop:'5%'}} onClick={this.jumpClub.bind(this)}>
                        <img src={manageClub} alt="manageClub" className="sidePic"/>
                        <text className="sideText">俱乐部管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'white'}} onClick={this.jumpMenu.bind(this)}>
                        <img src={manageMenu} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>食谱管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'white'}} onClick={this.jumpAct.bind(this)}>
                        <img src={manageAct} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>活动管理</text>
                    </div>

                </div>

                <div className = "clubAddContent">
                    <form className = "clubAddInfo">
                        <div className = "clubAddContent1">
                            <div className = "clubAddContent1Item" id="clubAddContent1Name">
                                <img src={cName} alt="address" className="clubAddContent1ItemLogo"/>
                                <label className = "clubAddContent1Label">俱乐部名称：</label>
                                <input value={this.state.name} type="text" id="nameInput" onChange={this.handleAddClub.bind(this,"name")}/>
                            </div>

                            <div className = "clubAddContent1Item" id="clubAddContent1Phone">
                                <img src={cPhone} alt="address" className="clubAddContent1ItemLogo"/>
                                <label className = "clubAddContent1Label">俱乐部电话：</label>
                                <input value={this.state.phone} type="text" id="phoneInput" onChange={this.handleAddClub.bind(this,"phone")}/>
                            </div>

                            <div className = "clubAddContent1Item" id="clubAddContent1Email">
                                <img src={cEmail} alt="address" className="clubAddContent1ItemLogo"/>
                                <label className = "clubAddContent1Label">俱乐部邮箱：</label>
                                <input value={this.state.email} type="text" id="emailInput" onChange={this.handleAddClub.bind(this,"email")}/>
                            </div>

                            <div className = "clubAddContent1Item" id="clubAddContent1Time">
                                <img src={cTime} alt="address" className="clubAddContent1ItemLogo"/>
                                <label className = "clubAddContent1Label">日营业时间：</label>
                                <input value={this.state.businessTime} type="text" id="timeInput" onChange={this.handleAddClub.bind(this,"businessTime")}/>
                            </div>

                            <div className = "clubAddContent1Item" id="clubAddContent1Address">
                                <img src={cAddress} alt="address" className="clubAddContent1ItemLogo"/>
                                <label className = "clubAddContent1Label">俱乐部地址：</label>
                                <input value={this.state.address} type="text" id="addressInput" onChange={this.handleAddClub.bind(this,"address")}/>
                            </div>

                            <div className = "clubAddContent1Item" id="clubAddContent1Dis">
                                <img src={cDisc} alt="discription" className="clubAddContent1ItemLogo"/>
                                <label className = "clubAddContent1Label">其它的信息：</label>
                                <input value={this.state.description} type="text" id="disInput" onChange={this.handleAddClub.bind(this,"description")}/>
                            </div>

                        </div>

                        <div className = "clubAddContent2">
                            <div className = "clubAddContent2Item" id="clubAddContent2Pic">
                                <input type="file" name="sex" id="clubAddContent2PicChoose" onChange={this.getPicName.bind(this)}/>
                                <div className="clubAddContent2Img">
                                    <img src={this.state.pictureUrl} alt="clubLogo" id="clubAddContent2Pic"/>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div className="clubAddContentButton">
                        <button id="clubAddContentButtonCancel" onClick={this.handleClubAddClick.bind(this,"cancel")}>取消</button>
                        <button id="clubAddContentButtonSure" onClick={this.handleClubAddClick.bind(this,"save")}>保存</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default ClubAdd;

/*function changeToop(){
    var file = document.getElementById("clubAddContent2PicChoose");
    if(file.value==''){
        //设置默认图片
        document.getElementById("clubAddContent2Pic").src=club;
    }else{
        alert(file.value)
    }
}

//获取input[file]图片的url Important
function getFileUrl() {
    var url;
    var file = document.getElementById("clubAddContent2PicChoose");
    var agent = navigator.userAgent;
    if (agent.indexOf("MSIE")>=1) {
        url = file.value;
    } else if(agent.indexOf("Firefox")>0) {
        url = window.URL.createObjectURL(file.files.item(0));
    } else if(agent.indexOf("Chrome")>0) {
        url = window.URL.createObjectURL(file.files.item(0));
    }

    var fd = new FormData();
    fd.append("file", url, file.files.item(0).name);
    console.log(fd);
    alert(file.files.item(0).name);
    return fd;
}

function pushPic(){
    var fd2 = new FormData();
    fd2 = getFileUrl();
    fetch('/user-server/demo/uploadPicture',{
        method:'post',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'/* 请求内容类型
        },
        body: fd2,
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        if(data.data=="success"){
            alert("添加成功");
        }
        else{
            alert("添加失败");
        }
    }).catch(function(error){
        console.log(error)
    })
}*/

