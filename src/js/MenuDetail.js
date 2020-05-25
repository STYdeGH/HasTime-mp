import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/menuDetail.css'
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
import qialuli from '../assets/qialuli.png'
import fat from '../assets/fat.png'
import danbaizhi from '../assets/danbaizhi.png'
import tanshui from '../assets/tanshui.png'

import {white} from "color-name";
import menu from "../assets/menu.png";
import menuType from "../assets/menuType.png";

class MenuDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            calories: 0,//卡路里
            carbohydrate: 0,//碳水化合物
            classification: "",//类型
            description: "",//描述
            fat: 0,//脂肪
            imgUrl: "string",//图片
            ingredients: [
                {
                    name: "",
                    weight: 0
                }
            ],//食材
            details:"",//总的食材信息
            name: "",//名称
            protein: 0,//蛋白质
            steps: [
                {
                    description: "",
                    imgUrl: "",
                    stepNo: 0
                }
            ],//操作步骤
            latestStep:"",
            latestUrl:"",
            latestNum:0,
        };
    }

    //组件一开始渲染的时候获取某的食谱信息
    componentDidMount() {
        const dataId = this.props.location.query;

        fetch('/diet-service/recipe/'+dataId.recipeId,{
            method: 'GET',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                if(data.code!= 200){
                    alert("该食谱已删除");
                    this.props.history.push({ pathname:'/MenuManage'})

                }
                else{
                    //alert(JSON.stringify(data.data))
                    let newState = data.data;
                    let shicai = data.data.ingredients;
                    let detail = "";
                    for(var i=0;i<shicai.length;i++){
                        let str = shicai[i]["name"]+":"+shicai[i]["weight"]
                        detail = detail+str+";";
                    }

                    newState["details"] = detail.substr(0,detail.length-1);
                    this.setState(newState);
                }



            })
            .catch((error) => {
                alert(error)
            })
    }

    toEditMenu(){
        const dataId1 = this.props.location.query;
        let data = {
            recipeId: dataId1.recipeId
        }
        this.props.history.push({ pathname:'/MenuEdit',query:data})
    }

    toDeleteMenu(){
        const dataId = this.props.location.query;

        //删除一个特定的俱乐部
        fetch('/diet-service/recipe/'+dataId.recipeId,{
            method:'delete',
            headers:{
                'Content-Type':'application/json;charset=UTF-8'/* 请求内容类型 */
            },
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data.data);
            if(data.msg == "操作成功！"){
                alert("删除成功");
                this.props.history.push('/MenuManage');
            }
            else{
                alert("删除失败");
            }
        }).catch(function(error){
            console.log(error)
        })

    }
    jumpClub(){
        this.props.history.push('/ClubManage');
    }

    jumpCourse(){
        this.props.history.push('/CourseManage');
    }

    jumpAct(){
        this.props.history.push('/ActivityManage');
    }

    jumpMenu(){
        this.props.history.push('/MenuManage');
    }

    render(){
        const stepList = this.state.steps;
        return(
            <div className="root">
                <div className="top-nav">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <label className="nav-title">Has Time</label>
                    <button className="btn-exit" onClick={()=>this.props.history.push("/SignIn")}>exit</button>
                </div>

                <div className="HeadSide">
                    <img src={headadmin} alt="admin" className="headAdmin"/>

                    <div className="adminInfo">
                        <img src={manage} alt="manage" className="adminLogo"/>
                        <text className="adminName">admin</text>
                    </div>

                    <div className="sideItem" style={{marginTop:'5%',backgroundColor:'white'}} onClick={this.jumpClub.bind(this)}>
                        <img src={manageClub} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>俱乐部管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'#F2C94C'}} onClick={this.jumpMenu.bind(this)}>
                        <img src={manageMenu} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'bold'}}>食谱管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'white'}} onClick={this.jumpAct.bind(this)}>
                        <img src={manageAct} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>活动管理</text>
                    </div>

                </div>

                <div className = "mainMenuContent">
                    <div className = "menuDetails">
                        <div className = "menuDetailImg">
                            <img src={this.state.imgUrl} alt="club" className="menuDetailPic"/>
                        </div>

                        <div className = "menuDetailInfo">

                            <div className="menuDetailItem" id="menuDetailName">
                                <img src={lightMenu} alt="name" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.name}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailType">
                                <img src={lightMenuType} alt="phone" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.classification}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailDis">
                                <img src={cDisc} alt="discription" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.description}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailKaLuLi">
                                <img src={qialuli} alt="discription" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.calories}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailTanShui">
                                <img src={tanshui} alt="discription" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.carbohydrate}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailFat">
                                <img src={fat} alt="discription" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.fat}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailDan">
                                <img src={danbaizhi} alt="discription" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.protein}</text>
                            </div>

                            <div className="menuDetailItem" id="menuDetailShiCai">
                                <img src={shicai} alt="email" className="menuDetailItemLogo"/>
                                <text className="menuDetailItemInfo">{this.state.details}</text>
                            </div>


                            <div className="menuDetailItem" id="menuDetailOpt">
                                <button className="menuDetailButton" id="menuButtonEdit" onClick={this.toEditMenu.bind(this)}>编辑</button>
                                <button className="menuDetailButton" id="menuButtonDelete" onClick={this.toDeleteMenu.bind(this)}>删除</button>
                            </div>

                        </div>

                    </div>

                    <div className="optList">
                        <div className="prompt">
                            <text className="promptInfo">操作细节</text>
                        </div>

                        <div className="splitArea">
                        </div>

                        <div className="opts">

                            {stepList.map(stepItem =>
                                <div className="optItem">
                                    <text className="optItemName">{stepItem.description}</text>
                                    <img src={stepItem.imgUrl} alt="step" className="optItemPic"/>
                                </div>
                            )}


                        </div>


                    </div>

                </div>
            </div>

        )
    }
}

export default MenuDetail;
