import React from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/courseDetail.css'
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
import deleteTeach from '../assets/delate.png'
import {white} from "color-name";

function CourseDetail(){
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

            <div className = "mainCourseContent">
                <div className = "courseDetails">
                    <div className = "courseDetailImg">
                        <img src={club} alt="course" className="courseDetailPic"/>
                    </div>

                    <div className = "courseDetailInfo">

                        <div className="courseDetailItem" id="courseDetailName">
                            <img src={lightCourseName} alt="name" className="courseDetailItemLogo"/>
                            <text className="courseDetailItemInfo">courseName</text>
                        </div>

                        <div className="courseDetailItem" id="courseDetailType">
                            <img src={lightCourseType} alt="type" className="courseDetailItemLogo"/>
                            <text className="courseDetailItemInfo">塑形</text>
                        </div>

                        <div className="courseDetailItem" id="courseDetailAddress">
                            <img src={cAddress} alt="address" className="courseDetailItemLogo"/>
                            <text className="courseDetailItemInfo">线下自由选取地点</text>
                        </div>


                        <div className="courseDetailItem" id="courseDetailTime">
                            <img src={cTime} alt="time" className="courseDetailItemLogo"/>
                            <text className="courseDetailItemInfo">2020.05.20~2020.09.29</text>
                        </div>

                        <div className="courseDetailItem" id="courseDetailDis">
                            <img src={cDisc} alt="discription" className="courseDetailItemLogo"/>
                            <text className="courseDetailItemInfo">课程详细信息</text>
                        </div>

                        <div className="courseDetailItem" id="detailOpt">
                            <button className="courseDetailButton" id="courseButtonEdit">编辑</button>
                            <button className="courseDetailButton" id="courseButtonDelete">删除</button>
                        </div>

                    </div>

                </div>

                <div className="teachList">
                    <div className="prompt">
                        <text className="promptInfo">教程列表</text>
                        <button className="teachAdd" id="teachAddButton">上传</button>
                        <input style={{display:"none"}} type="file" name="sex" id="teachChoose" value=""/>
                    </div>

                    <div className="splitArea">
                    </div>

                    <div className="teaches">
                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>

                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>

                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>

                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>

                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>

                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>

                        <div className="teachItem">
                            <img src={headadmin} alt="logo" className="teachItemLogo"/>
                            <text className="teachItemName">teachName</text>
                            <img src={deleteTeach} alt="delete" className="teachDelete"/>
                        </div>


                    </div>


                </div>

            </div>
        </div>

    )
}

export default CourseDetail;

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