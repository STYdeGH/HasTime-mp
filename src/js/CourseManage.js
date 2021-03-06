import React from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/courseManage.css'
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

function CourseManage(){
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

            <div className = "main-courseContent">
                <div className="addNewCourse">
                    <button className="addNewCourseButton">添加新的课程</button>
                </div>

                <div className = "searchBar">
                    <form>
                        <input type="text" placeholder="请输入你要搜索的课程名称..."/>
                        <button type="submit"></button>
                    </form>
                </div>

                <div className="courseList">
                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>

                    <div className="courseItem">
                        <img src={club} alt="manageCourse" className="coursePic"/>
                        <div className="courseName">
                            <img src={courseName} alt="name" className="courseNameLogo"/>
                            <text className="courseName">coursename</text>
                        </div>
                        <div className="courseType">
                            <img src={courseType} alt="type" className="courseTypeLogo"/>
                            <text className="courseType">courseType</text>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default CourseManage;

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