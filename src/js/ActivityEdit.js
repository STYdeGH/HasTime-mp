import React from 'react'
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

function ActivityEdit(){
    return(
        <div className="root">
            <div className="top-nav">
                <img src={logo} className="nav-logo" alt="logo" />
                <label className="nav-title">Has Time</label>
                <button className="btn-exit" onClick={()=>this.props.history.push("./coach_check")}>exit</button>
            </div>

            <div className="HeadSide">
                <img src={headadmin} alt="admin" className="headAdmin"/>

                <div className="adminInfo">
                    <img src={manage} alt="manage" className="adminLogo"/>
                    <text className="adminName">admin-username</text>
                </div>

                <div className="sideItem" style={{marginTop:'5%',backgroundColor:'white'}} onClick={jumpClub}>
                    <img src={manageClub} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>俱乐部管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'white'}} onClick={jumpCourse}>
                    <img src={manageCourse} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>课程管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'white'}} onClick={jumpMenu}>
                    <img src={manageMenu} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>食谱管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'#F2C94C'}} onClick={jumpAct}>
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
                            <input type="text" id="activityNameInput" value=""/>
                        </div>

                        <div className = "activityEditContent1Item" id="activityEditContent1Type">
                            <img src={lightCourseType} alt="address" className="activityEditContent1ItemLogo"/>
                            <label className = "activityEditContent1Label">活动类型：</label>
                            <select id="activityTypeSelect">
                                <option value="塑形">塑形</option>
                                <option value="瑜伽">瑜伽</option>
                                <option value="拉练">拉练</option>
                                <option value="减脂">减脂</option>
                            </select>
                        </div>

                        <div className = "activityEditContent1Item" id="activityEditContent1Address">
                            <img src={cAddress} alt="address" className="activityEditContent1ItemLogo"/>
                            <label className = "activityEditContent1Label">活动地点：</label>
                            <input type="text" id="activityAddressInput" value=""/>
                        </div>

                        <div className = "activityEditContent1Item" id="activityEditContent1Time">
                            <img src={cTime} alt="address" className="activityEditContent1ItemLogo"/>
                            <label className = "activityEditContent1Label">有效期限：</label>
                            <div className="activityDateInfo">
                                <input type="date" id="activityStartInput" value=""/>
                                <text>——</text>
                                <input type="date" id="activityEndInput" value=""/>
                            </div>
                        </div>



                        <div className = "activityEditContent1Item" id="activityEditContent1Dis">
                            <img src={cDisc} alt="discription" className="activityEditContent1ItemLogo"/>
                            <label className = "activityEditContent1Label">详细信息：</label>
                            <input type="text" id="activityDisInput" value=""/>
                        </div>

                        <div className = "activityEditContent1Item" id="activityEditContent1Reward">
                            <img src={reward} alt="discription" className="activityEditContent1ItemLogo"/>
                            <label className = "activityEditContent1Label">活动奖金：</label>
                            <input type="text" id="activityRewardInput" value=""/>
                        </div>



                    </div>

                    <div className = "activityEditContent2">
                        <div className = "activityEditContent2Item" id="activityEditContent2Pic">
                            <button id="activityEditButton">选择图片</button>
                            <div className="activityEditContent2Img">
                                <img src={club} alt="courseLogo" id="activityEditContent2Pic"/>
                            </div>
                            <input style={{display:"none"}} type="file" name="sex" id="activityEditContent2PicChoose" value=""/>
                        </div>

                    </div>

                </form>

                <div className="activityEditContentButton">
                    <button id="activityEditContentButtonCancel">取消</button>
                    <button id="activityEditContentButtonSure">确认</button>
                </div>

            </div>
        </div>

    )
}

export default ActivityEdit;

function jumpClub() {
    alert("success");
    var side = document.getElementsByClassName("sideItem");
    var chooseSide = side[0];
    chooseSide.style.backgroundColor = "#F2C94C";
    side[1].style.backgroundColor = "white";
    side[2].style.backgroundColor = "white";
    side[3].style.backgroundColor = "white";

    var text = document.getElementsByClassName("sideText");
    var chooseText = text[0];
    chooseText.style.fontWeight = "bold";
    text[1].style.fontWeight = "normal";
    text[2].style.fontWeight = "normal";
    text[3].style.fontWeight = "normal";

}

function jumpCourse() {
    alert("success");
    var side = document.getElementsByClassName("sideItem");
    var chooseSide = side[1];
    chooseSide.style.backgroundColor = "#F2C94C";
    side[0].style.backgroundColor = "white";
    side[2].style.backgroundColor = "white";
    side[3].style.backgroundColor = "white";

    var text = document.getElementsByClassName("sideText");
    var chooseText = text[1];
    chooseText.style.fontWeight = "bold";
    text[0].style.fontWeight = "normal";
    text[2].style.fontWeight = "normal";
    text[3].style.fontWeight = "normal";

}

function jumpMenu() {
    alert("success");
    var side = document.getElementsByClassName("sideItem");
    var chooseSide = side[2];
    chooseSide.style.backgroundColor = "#F2C94C";
    side[0].style.backgroundColor = "white";
    side[1].style.backgroundColor = "white";
    side[3].style.backgroundColor = "white";

    var text = document.getElementsByClassName("sideText");
    var chooseText = text[2];
    chooseText.style.fontWeight = "bold";
    text[0].style.fontWeight = "normal";
    text[1].style.fontWeight = "normal";
    text[3].style.fontWeight = "normal";
    window.location.href = "/Top";
}

function jumpAct() {
    alert("success");
    var side = document.getElementsByClassName("sideItem");
    var chooseSide = side[3];
    chooseSide.style.backgroundColor = "#F2C94C";
    side[0].style.backgroundColor = "white";
    side[1].style.backgroundColor = "white";
    side[2].style.backgroundColor = "white";

    var text = document.getElementsByClassName("sideText");
    var chooseText = text[3];
    chooseText.style.fontWeight = "bold";
    text[0].style.fontWeight = "normal";
    text[1].style.fontWeight = "normal";
    text[2].style.fontWeight = "normal";
}