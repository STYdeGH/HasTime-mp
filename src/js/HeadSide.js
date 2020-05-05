import React from 'react'
import '../css/headSide.css'
import headadmin from '../assets/headadmin.jpg'
import manageClub from '../assets/manageClub.png'
import manageCourse from '../assets/manageCourse.png'
import manageMenu from '../assets/manageMenu.png'
import manageAct from '../assets/manageAct.png'
import manage from '../assets/circle.png'

var firstStyle = {marginTop:'5%'};
var chosenStyle = {backgroundColor:'#E5E5E5'};
var chosenTagStyle = {backgroundColor:'#F2C94C'};
var chosenTextStyle = {fontWeight: 'bold'};
var otherStyle = {backgroundColor:'white'};
var otherTagStyle = {backgroundColor:'white'};
var otherTextStyle = {fontWeight: 'normal'};

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
    /*var side = document.getElementsByClassName("sideItem");
    var firstSide = side[0];
    firstSide.style = chosenStyle;
    side[1].style = otherStyle;
    side[2].style = otherStyle;
    side[3].style = otherStyle;

    var tag = document.getElementsByClassName("chooseTag");
    var firstTag = tag[0];
    firstTag.style = chosenTagStyle;
    tag[1].style = otherTagStyle;
    tag[2].style = otherTagStyle;
    tag[3].style = otherTagStyle;

    var text = document.getElementsByClassName("sideText");
    var firstText = text[0];
    firstText.style = chosenTextStyle;
    text[1].style = otherTextStyle;
    text[2].style = otherTextStyle;
    text[3].style = otherTextStyle;*/

}

function jumpCourse() {
    alert("success");
    window.location.href = "index.html";
    /*var side = document.getElementsByClassName("sideItem");
    var firstSide = side[1];
    firstSide.style = chosenStyle;
    side[0].style = otherStyle;
    side[2].style = otherStyle;
    side[3].style = otherStyle;

    var tag = document.getElementsByClassName("chooseTag");
    var firstTag = tag[1];
    firstTag.style = chosenTagStyle;
    tag[0].style = otherTagStyle;
    tag[2].style = otherTagStyle;
    tag[3].style = otherTagStyle;

    var text = document.getElementsByClassName("sideText");
    var firstText = text[1];
    firstText.style = chosenTextStyle;
    text[0].style = otherTextStyle;
    text[2].style = otherTextStyle;
    text[3].style = otherTextStyle;
    window.location.href = "index.html";*/

}

function jumpMenu() {
    alert("success");
    /*var side = document.getElementsByClassName("sideItem");
    var firstSide = side[2];
    firstSide.style = chosenStyle;
    side[0].style = otherStyle;
    side[1].style = otherStyle;
    side[3].style = otherStyle;

    var tag = document.getElementsByClassName("chooseTag");
    var firstTag = tag[2];
    firstTag.style = chosenTagStyle;
    tag[0].style = otherTagStyle;
    tag[1].style = otherTagStyle;
    tag[3].style = otherTagStyle;

    var text = document.getElementsByClassName("sideText");
    var firstText = text[2];
    firstText.style = chosenTextStyle;
    text[0].style = otherTextStyle;
    text[1].style = otherTextStyle;
    text[3].style = otherTextStyle;*/
    window.location.href = "index.html";

}

function jumpAct() {
    alert("success");
    /*var side = document.getElementsByClassName("sideItem");
    var firstSide = side[3];
    firstSide.style = chosenStyle;
    side[0].style = otherStyle;
    side[1].style = otherStyle;
    side[2].style = otherStyle;

    var tag = document.getElementsByClassName("chooseTag");
    var firstTag = tag[3];
    firstTag.style = chosenTagStyle;
    tag[0].style = otherTagStyle;
    tag[1].style = otherTagStyle;
    tag[2].style = otherTagStyle;

    var text = document.getElementsByClassName("sideText");
    var firstText = text[3];
    firstText.style = chosenTextStyle;
    text[0].style = otherTextStyle;
    text[1].style = otherTextStyle;
    text[2].style = otherTextStyle;*/
    window.location.href = "index.html";

}

