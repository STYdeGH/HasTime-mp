import React from 'react'
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

function ClubAdd(){
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

            <div className = "clubAddContent">
                <form className = "clubAddInfo">
                    <div className = "clubAddContent1">
                        <div className = "clubAddContent1Item" id="clubAddContent1Name">
                            <img src={cName} alt="address" className="clubAddContent1ItemLogo"/>
                            <label className = "clubAddContent1Label">俱乐部名称：</label>
                            <input type="text" id="nameInput" value=""/>
                        </div>

                        <div className = "clubAddContent1Item" id="clubAddContent1Phone">
                            <img src={cPhone} alt="address" className="clubAddContent1ItemLogo"/>
                            <label className = "clubAddContent1Label">俱乐部电话：</label>
                            <input type="text" id="phoneInput" value=""/>
                        </div>

                        <div className = "clubAddContent1Item" id="clubAddContent1Email">
                            <img src={cEmail} alt="address" className="clubAddContent1ItemLogo"/>
                            <label className = "clubAddContent1Label">俱乐部邮箱：</label>
                            <input type="text" id="emailInput" value=""/>
                        </div>

                        <div className = "clubAddContent1Item" id="clubAddContent1Time">
                            <img src={cTime} alt="address" className="clubAddContent1ItemLogo"/>
                            <label className = "clubAddContent1Label">日营业时间：</label>
                            <input type="text" id="timeInput" value=""/>
                        </div>

                        <div className = "clubAddContent1Item" id="clubAddContent1Address">
                            <img src={cAddress} alt="address" className="clubAddContent1ItemLogo"/>
                            <label className = "clubAddContent1Label">俱乐部地址：</label>
                            <input type="text" id="addressInput" value=""/>
                        </div>

                        <div className = "clubAddContent1Item" id="clubAddContent1Dis">
                            <img src={cDisc} alt="discription" className="clubAddContent1ItemLogo"/>
                            <label className = "clubAddContent1Label">其它的信息：</label>
                            <input type="text" id="disInput" value=""/>
                        </div>

                    </div>

                    <div className = "clubAddContent2">
                        <div className = "clubAddContent2Item" id="clubAddContent2Pic">
                            <button id="clubAddClubButton">选择图片</button>
                            <div className="clubAddContent2Img">
                                <img src={club} alt="clubLogo" id="clubAddContent2Pic"/>
                            </div>
                            <input style={{display:"none"}} type="file" name="sex" id="clubAddContent2PicChoose" value=""/>
                        </div>

                    </div>

                </form>

                <div className="clubAddContentButton">
                    <button id="clubAddContentButtonCancel">取消</button>
                    <button id="clubAddContentButtonSure">保存</button>
                </div>

            </div>
        </div>

    )
}

export default ClubAdd;

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