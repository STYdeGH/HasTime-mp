import React from 'react'
import '../css/headSide.css'
import headadmin from '../assets/headadmin.jpg'
import manageClub from '../assets/manageClub.png'
import manageCourse from '../assets/manageCourse.png'
import manageMenu from '../assets/manageMenu.png'
import manageAct from '../assets/manageAct.png'
import manage from '../assets/circle.png'

var firstStyle = {marginTop:'5%'};
var otherStyle = {backgroundColor:'white'};
var otherTagStyle = {backgroundColor:'white'};
var otherTextStyle = {fontWeight: 'normal'};

/*
 @description: 总部管理员侧边栏组件
 */
function HeadSide(){
    return(
        <div className="HeadSide">
            <img src={headadmin} alt="admin" className="headAdmin"/>

            <div className="adminInfo">
                <img src={manage} alt="manage" className="adminLogo"/>
                <text className="adminName">admin-username</text>
            </div>

            <div className="sideItem" style={firstStyle} onClick={jumpClub}>
                <div className="chooseTag">
                </div>
                <img src={manageClub} alt="manageClub" className="sidePic"/>
                <text className="sideText">俱乐部管理</text>
            </div>

            <div className="sideItem" style={otherStyle} onClick={jumpCourse}>
                <div className="chooseTag" style={otherTagStyle}>
                </div>
                <img src={manageCourse} alt="manageClub" className="sidePic"/>
                <text className="sideText" style={otherTextStyle}>课程管理</text>
            </div>

            <div className="sideItem" style={otherStyle} onClick={jumpMenu}>
                <div className="chooseTag" style={otherTagStyle}>
                </div>
                <img src={manageMenu} alt="manageClub" className="sidePic"/>
                <text className="sideText" style={otherTextStyle}>食谱管理</text>
            </div>

            <div className="sideItem" style={otherStyle} onClick={jumpAct}>
                <div className="chooseTag" style={otherTagStyle}>
                </div>
                <img src={manageAct} alt="manageClub" className="sidePic"/>
                <text className="sideText" style={otherTextStyle}>活动管理</text>
            </div>

        </div>
    )
}

export default HeadSide;

function jumpClub() {
    alert("success");
    window.location.href = "index.html";
}

function jumpCourse() {
    alert("success");
    window.location.href = "index.html";

}

function jumpMenu() {
    alert("success");
    window.location.href = "index.html";

}

function jumpAct() {
    alert("success");
    window.location.href = "index.html";
}

