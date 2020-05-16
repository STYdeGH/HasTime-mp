import React from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/courseEdit.css'
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
import cAdmin from '../assets/cAdmin.png'
import {white} from "color-name"

function CourseEdit(){
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

                <div className="sideItem" style={{backgroundColor:'#F2C94C'}} onClick={jumpCourse}>
                    <img src={manageCourse} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'bold'}}>课程管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'white'}} onClick={jumpMenu}>
                    <img src={manageMenu} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>食谱管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'white'}} onClick={jumpAct}>
                    <img src={manageAct} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>活动管理</text>
                </div>

            </div>

            <div className = "courseEditContent">
                <form className = "courseEditInfo">
                    <div className = "courseEditContent1">
                        <div className = "courseEditContent1Item" id="courseEditContent1Name">
                            <img src={lightCourseName} alt="address" className="courseEditContent1ItemLogo"/>
                            <label className = "courseEditContent1Label">课程名称：</label>
                            <input type="text" id="courseNameInput" value=""/>
                        </div>

                        <div className = "courseEditContent1Item" id="courseEditContent1Type">
                            <img src={lightCourseType} alt="address" className="courseEditContent1ItemLogo"/>
                            <label className = "courseEditContent1Label">课程类型：</label>
                            <select id="courseTypeSelect">
                                <option value="塑形">塑形</option>
                                <option value="瑜伽">瑜伽</option>
                                <option value="拉练">拉练</option>
                                <option value="减脂">减脂</option>
                            </select>
                        </div>

                        <div className = "courseEditContent1Item" id="courseEditContent1Address">
                            <img src={cAddress} alt="address" className="courseEditContent1ItemLogo"/>
                            <label className = "courseEditContent1Label">上课地点：</label>
                            <input type="text" id="courseAddressInput" value=""/>
                        </div>

                        <div className = "courseEditContent1Item" id="courseEditContent1Time">
                            <img src={cTime} alt="address" className="courseEditContent1ItemLogo"/>
                            <label className = "courseEditContent1Label">有效期限：</label>
                            <div className="courseDateInfo">
                                <input type="date" id="courseStartInput" value=""/>
                                <text>——</text>
                                <input type="date" id="courseEndInput" value=""/>
                            </div>
                        </div>


                        <div className = "courseEditContent1Item" id="courseEditContent1Dis">
                            <img src={cDisc} alt="discription" className="courseEditContent1ItemLogo"/>
                            <label className = "courseEditContent1Label">详细信息：</label>
                            <input type="text" id="courseDisInput" value=""/>
                        </div>


                    </div>

                    <div className = "courseEditContent2">
                        <div className = "courseEditContent2Item" id="courseEditContent2Pic">
                            <button id="courseEditButton">选择图片</button>
                            <div className="courseEditContent2Img">
                                <img src={club} alt="courseLogo" id="courseEditContent2Pic"/>
                            </div>
                            <input style={{display:"none"}} type="file" name="sex" id="courseEditContent2PicChoose" value=""/>
                        </div>

                    </div>

                </form>

                <div className="courseEditContentButton">
                    <button id="courseEditContentButtonCancel">取消</button>
                    <button id="courseEditContentButtonSure">确认</button>
                </div>

            </div>
        </div>

    )
}

export default CourseEdit;

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