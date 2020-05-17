import React from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/clubDetail.css'
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
import {white} from "color-name";

function ClubDetail(){
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

                <div className="sideItem" style={{marginTop:'5%'}} onClick={jumpClub}>
                    <img src={manageClub} alt="manageClub" className="sidePic"/>
                    <text className="sideText">俱乐部管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'white'}} onClick={jumpCourse}>
                    <img src={manageCourse} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>课程管理</text>
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

            <div className = "mainContent">
                <div className = "details">
                    <div className = "detailImg">
                        <img src={club} alt="club" className="detailPic"/>
                    </div>

                    <div className = "detailInfo">
                        <div className="detailItem" id="detailAdmin">
                            <img src={headadmin} alt="logo" className="detailAdminLogo"/>
                            <text className="detailAdminName">admin-name</text>
                        </div>

                        <div className="detailItem" id="detailName">
                            <img src={cName} alt="name" className="detailItemLogo"/>
                            <text className="detailItemInfo">clubname</text>
                        </div>

                        <div className="detailItem" id="detailPhone">
                            <img src={cPhone} alt="phone" className="detailItemLogo"/>
                            <text className="detailItemInfo">15851388268</text>
                        </div>

                        <div className="detailItem" id="detailEmail">
                            <img src={cEmail} alt="email" className="detailItemLogo"/>
                            <text className="detailItemInfo">3161777108@qq.com</text>
                        </div>

                        <div className="detailItem" id="detailTime">
                            <img src={cTime} alt="time" className="detailItemLogo"/>
                            <text className="detailItemInfo">7：30~22：30/日</text>
                        </div>

                        <div className="detailItem" id="detailAddress">
                            <img src={cAddress} alt="address" className="detailItemLogo"/>
                            <text className="detailItemInfo">南京鼓楼区湖南路12号</text>
                        </div>

                        <div className="detailItem" id="detailDis">
                            <img src={cDisc} alt="discription" className="detailItemLogo"/>
                            <text className="detailItemInfo">私人健身俱乐部</text>
                        </div>

                        <div className="detailItem" id="detailOpt">
                            <button className="detailButton" id="buttonEdit">编辑</button>
                            <button className="detailButton" id="buttonDelete">删除</button>
                        </div>

                    </div>

                </div>

                <div className="coachList">
                    <div className="prompt">
                        <text className="promptInfo">教练列表</text>
                    </div>

                    <div className="splitArea">
                    </div>

                    <div className="coaches">
                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                        <div className="coachItem">
                            <img src={headadmin} alt="logo" className="coachItemLogo"/>
                            <text className="coachItemName">coachName</text>
                        </div>

                    </div>


                </div>

            </div>
        </div>

    )
}

export default ClubDetail;

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