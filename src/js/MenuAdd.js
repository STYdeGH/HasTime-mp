import React,{ Component } from 'react'
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
import qialuli from '../assets/qialuli.png'
import fat from '../assets/fat.png'
import danbaizhi from '../assets/danbaizhi.png'
import tanshui from '../assets/tanshui.png'
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

class MenuAdd extends Component{

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

    getMenuPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("menuAddContent2PicChoose");
        let agent = navigator.userAgent;
        if (agent.indexOf("MSIE")>=1) {
            url = file.value;
        } else if(agent.indexOf("Firefox")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        } else if(agent.indexOf("Chrome")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        }
        let fileName = file.files.item(0).name;
        let allUrl = cloudUrl+fileName
        document.getElementById("menuAddContent2Pic").src=allUrl;
        let newState = {};
        newState["imgUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    getStepPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("menuAddContent2PicChoose2");
        let agent = navigator.userAgent;
        if (agent.indexOf("MSIE")>=1) {
            url = file.value;
        } else if(agent.indexOf("Firefox")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        } else if(agent.indexOf("Chrome")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        }
        let fileName = file.files.item(0).name;
        let allUrl = cloudUrl+fileName
        document.getElementById("menuAddContent2Pic2").src=allUrl;
        let newState = {};
        newState["latestUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    handleAddMenu=(type,event)=>{
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    }

    handleMenuAddClick=(type,event)=>{
        if(type == "save"){
            //获取食材
            let inrig = [];
            let shicai = this.state.details;
            console.log(shicai);
            console.log(typeof (shicai));
            let scItem = shicai.split(";");
            for(let i=0;i<scItem.length;i++){
                let det = scItem[i].split(":");
                let info = {};
                info["name"] = det[0];
                info["weight"] = det[1];
                inrig[i] = info;
            }
            console.log(inrig);
            let newState = {};
            newState["ingredients"] = inrig;
            this.setState(newState);
            this.setState({
                    ingredients: inrig
                }
            )
            this.state.ingredients = inrig;
            let newInfo = {};
            newInfo["calories"] = this.state.calories;
            newInfo["carbohydrate"] = this.state.carbohydrate;
            newInfo["classification"] = this.state.classification;
            newInfo["description"] = this.state.description;
            newInfo["fat"] = this.state.fat;
            newInfo["id"] = 0;
            newInfo["imgUrl"] = this.state.imgUrl;
            newInfo["ingredients"] = this.state.ingredients;
            newInfo["name"] = this.state.name;
            newInfo["protein"] = this.state.protein;
            newInfo["steps"] = this.state.steps;

            alert(JSON.stringify(newInfo));
            fetch('/diet-service/recipe',{
                method:'post',
                headers:{
                    'Content-Type':'application/json;charset=UTF-8'/* 请求内容类型 */
                },
                body:JSON.stringify(newInfo)
            }).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data)
                if(data.msg=="操作成功！"){
                    alert("添加成功");
                }
                else{
                    alert("添加失败");
                }
            }).catch(function(error){
                console.log(error)
            })

        }
        else{
            document.getElementById("menuNameInput").value = "";
            document.getElementById("menuTypeInput").value = "";
            document.getElementById("menuDisInput").value = "";
            document.getElementById("menuDisInput").value = "";
            document.getElementById("menuShiCaiInput").value = "";
            document.getElementById("menuKaLuLiInput").value = "";
            document.getElementById("menuFatInput").value = "";
            document.getElementById("menuTanShuiInput").value = "";
            document.getElementById("menuDanInput").value = "";
            document.getElementById("menuStepInput").value = "";

        }

    }

    handleAddStep=(type,event)=>{
        if(type == "save") {
            //添加步骤细节
            let addSteps = {};
            addSteps["description"] = this.state.latestStep;
            addSteps["imgUrl"] = this.state.latestUrl;
            addSteps["stepNo"] = this.state.latestNum;
            this.state.steps[this.state.latestNum]=addSteps;
            let newState = {};
            newState["steps"] = this.state.steps;
            newState["latestNum"] = this.state.latestNum + 1;
            this.setState(newState);
            console.log(this.state.steps);
            alert("添加成功");
        }
        else {
            let newState = {};
            newState["steps"] = [];
            newState["latestStep"] = "";
            newState["latestUrl"] = "";
            this.setState(newState);
            alert("添加失败");
        }
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

                <div className = "menuAddContent">
                    <form className = "menuAddInfo">
                        <div className = "menuAddContent1">
                            <div className = "menuAddContent1Item" id="menuAddContent1Name">
                                <img src={lightMenu} alt="name" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">食谱名称：</label>
                                <input type="text" id="menuNameInput" value={this.state.name} onChange={this.handleAddMenu.bind(this,"name")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1Type">
                                <img src={lightMenuType} alt="type" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">食谱类型：</label>
                                <input type="text" id="menuTypeInput" value={this.state.classification} onChange={this.handleAddMenu.bind(this,"classification")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1Dis">
                                <img src={cDisc} alt="discription" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">食谱描述：</label>
                                <input type="text" id="menuDisInput" value={this.state.description} onChange={this.handleAddMenu.bind(this,"description")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1ShiCai">
                                <img src={shicai} alt="shicai" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">食谱食材：</label>
                                <input type="text" id="menuShiCaiInput" value={this.state.details} onChange={this.handleAddMenu.bind(this,"details")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1KaLuLi">
                                <img src={qialuli} alt="kaluli" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">卡路里数：</label>
                                <input type="text" id="menuKaLuLiInput" value={this.state.calories} onChange={this.handleAddMenu.bind(this,"calories")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1Fat">
                                <img src={fat} alt="fat" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">脂肪含量：</label>
                                <input type="text" id="menuFatInput" value={this.state.fat} onChange={this.handleAddMenu.bind(this,"fat")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1TanShui">
                                <img src={tanshui} alt="tanshui" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">碳水含量：</label>
                                <input type="text" id="menuTanShuiInput" value={this.state.carbohydrate} onChange={this.handleAddMenu.bind(this,"carbohydrate")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1Dan">
                                <img src={danbaizhi} alt="dan" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">蛋白质量：</label>
                                <input type="text" id="menuDanInput" value={this.state.protein} onChange={this.handleAddMenu.bind(this,"protein")}/>
                            </div>

                            <div className = "menuAddContent1Item" id="menuAddContent1Opt">
                                <img src={opt} alt="step" className="menuAddContent1ItemLogo"/>
                                <label className = "menuAddContent1Label">操作步骤：</label>
                                <input type="text" id="menuStepInput" value={this.state.latestStep} onChange={this.handleAddMenu.bind(this,"latestStep")}/>
                            </div>


                        </div>

                        <div className = "menuAddContent2">
                            <div className = "menuAddContent2Item" id="menuAddContent2Pic">
                                <input type="file" id="menuAddContent2PicChoose" onChange={this.getMenuPicName.bind(this)}/>
                                <div className="menuAddContent2Img">
                                    <img src={this.state.imgUrl} alt="menuLogo" id="menuAddContent2Pic"/>
                                </div>
                            </div>

                            <div className = "menuAddContent2Item" id="menuAddContent2Pic">
                                <input type="file" id="menuAddContent2PicChoose2" onChange={this.getStepPicName.bind(this)}/>
                                <div className="menuAddContent2Img">
                                    <img src={this.state.latestUrl} alt="menuLogo" id="menuAddContent2Pic2"/>
                                </div>


                            </div>

                        </div>

                    </form>

                    <button id="stepAddContentButtonCancel" onClick={this.handleAddStep.bind(this,"cancel")}>取消步骤</button>
                    <button id="stepAddContentButtonSure" onClick={this.handleAddStep.bind(this,"save")}>添加步骤</button>

                    <div className="menuAddContentButton">
                        <button id="menuAddContentButtonCancel" onClick={this.handleMenuAddClick.bind(this,"cancel")}>取消</button>
                        <button id="menuAddContentButtonSure" onClick={this.handleMenuAddClick.bind(this,"save")}>保存</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default MenuAdd;
