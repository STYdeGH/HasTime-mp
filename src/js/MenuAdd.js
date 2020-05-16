import React from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/menuAdd.css'
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
import lightMenu from '../assets/lightMenu.png'
import lightMenuType from '../assets/lightMenuType.png'
import shicai from '../assets/shicai.png'
import opt from '../assets/opt.png'
import cAdmin from '../assets/cAdmin.png'
import {white} from "color-name";

function MenuAdd(){
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

                <div className="sideItem" style={{backgroundColor:'#F2C94C'}} onClick={jumpMenu}>
                    <img src={manageMenu} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'bold'}}>食谱管理</text>
                </div>

                <div className="sideItem" style={{backgroundColor:'white'}} onClick={jumpAct}>
                    <img src={manageAct} alt="manageClub" className="sidePic"/>
                    <text className="sideText" style={{fontWeight: 'normal'}}>活动管理</text>
                </div>

            </div>

            <div className = "menuAddContent">
                <form className = "menuAddInfo">
                    <div className = "menuAddContent1">
                        <div className = "menuAddContent1Item" id="menuAddContent1Name">
                            <img src={lightMenu} alt="name" className="menuAddContent1ItemLogo"/>
                            <label className = "menuAddContent1Label">食谱名称：</label>
                            <input type="text" id="menuNameInput" value=""/>
                        </div>

                        <div className = "menuAddContent1Item" id="menuAddContent1Type">
                            <img src={lightMenuType} alt="type" className="menuAddContent1ItemLogo"/>
                            <label className = "menuAddContent1Label">食谱类型：</label>
                            <input type="text" id="menuTypeInput" value=""/>
                        </div>

                        <div className = "menuAddContent1Item" id="menuAddContent1Dis">
                            <img src={cDisc} alt="discription" className="menuAddContent1ItemLogo"/>
                            <label className = "menuAddContent1Label">食谱描述：</label>
                            <input type="text" id="menuDisInput" value=""/>
                        </div>

                        <div className = "menuAddContent1Item" id="menuAddContent1ShiCai">
                            <img src={shicai} alt="shicai" className="menuAddContent1ItemLogo"/>
                            <label className = "menuAddContent1Label">食谱食材：</label>
                            <input type="text" id="menuShiCaiInput" value=""/>
                        </div>

                        <div className = "menuAddContent1Item" id="menuAddContent1Opt">
                            <img src={opt} alt="opt" className="menuAddContent1ItemLogo"/>
                            <label className = "menuAddContent1Label">操作步骤：</label>
                            <textarea id="menuOptInput"/>
                        </div>



                    </div>

                    <div className = "menuAddContent2">
                        <div className = "menuAddContent2Item" id="menuAddContent2Pic">
                            <button id="menuAddClubButton">选择图片</button>
                            <div className="menuAddContent2Img">
                                <img src={club} alt="menuLogo" id="menuAddContent2Pic"/>
                            </div>
                            <input style={{display:"none"}} type="file" name="sex" id="menuAddContent2PicChoose" value=""/>
                        </div>

                    </div>

                </form>

                <div className="menuAddContentButton">
                    <button id="menuAddContentButtonCancel">取消</button>
                    <button id="menuAddContentButtonSure">保存</button>
                </div>

            </div>
        </div>

    )
}

export default MenuAdd;

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