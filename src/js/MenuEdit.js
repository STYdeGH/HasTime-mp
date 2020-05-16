import React from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/menuEdit.css'
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

function MenuEdit(){
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

            <div className = "menuEditContent">
                <form className = "menuEditInfo">
                    <div className = "menuEditContent1">
                        <div className = "menuEditContent1Item" id="menuEditContent1Name">
                            <img src={lightMenu} alt="name" className="menuEditContent1ItemLogo"/>
                            <label className = "menuEditContent1Label">食谱名称：</label>
                            <input type="text" id="menuEditNameInput" value=""/>
                        </div>

                        <div className = "menuEditContent1Item" id="menuEditContent1Type">
                            <img src={lightMenuType} alt="type" className="menuEditContent1ItemLogo"/>
                            <label className = "menuEditContent1Label">食谱类型：</label>
                            <input type="text" id="menuEditTypeInput" value=""/>
                        </div>

                        <div className = "menuEditContent1Item" id="menuEditContent1Dis">
                            <img src={cDisc} alt="discription" className="menuEditContent1ItemLogo"/>
                            <label className = "menuEditContent1Label">食谱描述：</label>
                            <input type="text" id="menuEditDisInput" value=""/>
                        </div>

                        <div className = "menuEditContent1Item" id="menuEditContent1ShiCai">
                            <img src={shicai} alt="shicai" className="menuEditContent1ItemLogo"/>
                            <label className = "menuEditContent1Label">食谱食材：</label>
                            <input type="text" id="menuEditShiCaiInput" value=""/>
                        </div>

                        <div className = "menuEditContent1Item" id="menuEditContent1Opt">
                            <img src={opt} alt="opt" className="menuEditContent1ItemLogo"/>
                            <label className = "menuEditContent1Label">操作步骤：</label>
                            <textarea id="menuEditOptInput"/>
                        </div>



                    </div>

                    <div className = "menuEditContent2">
                        <div className = "menuEditContent2Item" id="menuEditContent2Pic">
                            <button id="menuEditClubButton">选择图片</button>
                            <div className="menuEditContent2Img">
                                <img src={club} alt="menuLogo" id="menuEditContent2Pic"/>
                            </div>
                            <input style={{display:"none"}} type="file" name="sex" id="menuEditContent2PicChoose" value=""/>
                        </div>

                    </div>

                </form>

                <div className="menuEditContentButton">
                    <button id="menuEditContentButtonCancel">取消</button>
                    <button id="menuEditContentButtonSure">保存</button>
                </div>

            </div>
        </div>

    )
}

export default MenuEdit;

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