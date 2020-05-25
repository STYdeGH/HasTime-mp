import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/menuEdit.css'
import qialuli from '../assets/qialuli.png'
import fat from '../assets/fat.png'
import danbaizhi from '../assets/danbaizhi.png'
import tanshui from '../assets/tanshui.png'
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

class MenuEdit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            calories: 0,//卡路里
            carbohydrate: 0,//碳水化合物
            classification: "",//类型
            description: "",//描述
            fat: 0,//脂肪
            id: 0,
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
       // alert(dataId.recipeId);
        let idInfo = {};
        idInfo["id"] = dataId.recipeId;
        this.setState(idInfo);
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
                    newState["latestStep"] = data.data.steps[0].description;
                    newState["latestUrl"] = data.data.steps[0].imgUrl;
                    this.setState(newState);
                }



            })
            .catch((error) => {
                alert(error)
            })
    }

    sureUpdate(){
        //alert("已取消！！！");
        const dataId1 = this.props.location.query;
        //alert(dataId1.reciptId);
        let newInfo = {};
        newInfo["calories"] = this.state.calories;
        newInfo["carbohydrate"] = this.state.carbohydrate;
        newInfo["classification"] = this.state.classification;
        newInfo["description"] = this.state.description;
        newInfo["fat"] = this.state.fat;
        newInfo["id"] = this.state.id;
        newInfo["imgUrl"] = this.state.imgUrl;
        newInfo["ingredients"] = this.state.ingredients;
        newInfo["name"] = this.state.name;
        newInfo["protein"] = this.state.protein;
        newInfo["steps"] = this.state.steps;

        //alert(JSON.stringify(newInfo));
        fetch('/diet-service/recipe',{
            method: 'PUT',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body:JSON.stringify(newInfo)
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                if(data.msg = "操作成功！"){
                    alert("该食谱已更新");
                    this.props.history.push({ pathname:'/MenuManage'})
                }
            })
            .catch((error) => {
                alert(error)
            })

    }

    cancelUpdate(){
        alert("已取消！！！");
        const dataId1 = this.props.location.query;
        let data = {
            reciptId: this.state.id
        }
        //alert(this.state.id);
        this.props.history.push({ pathname:'/MenuDetail',query:data})
    }

    getMenuPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("menuEditContent2PicChoose");
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
        document.getElementById("menuEditContent2Pic").src=allUrl;
        let newState = {};
        newState["imgUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    getStepPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("menuEditContent2PicChoose2");
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
        document.getElementById("menuEditContent2Pic2").src=allUrl;
        let newState = {};
        newState["latestUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    handleEditMenu=(type,event)=>{
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    }

    handleEditStep=(type,event)=>{
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
                    <button className="btn-exit" onClick={()=>this.props.history.push("./coach_check")}>exit</button>
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

                <div className = "menuEditContent">
                    <form className = "menuEditInfo">
                        <div className = "menuEditContent1">
                            <div className = "menuEditContent1Item" id="menuEditContent1Name">
                                <img src={lightMenu} alt="name" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">食谱名称：</label>
                                <input type="text" id="menuEditNameInput" value={this.state.name} onChange={this.handleEditMenu.bind(this,"name")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1Type">
                                <img src={lightMenuType} alt="type" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">食谱类型：</label>
                                <input type="text" id="menuEditTypeInput" value={this.state.classification} onChange={this.handleEditMenu.bind(this,"classification")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1Dis">
                                <img src={cDisc} alt="discription" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">食谱描述：</label>
                                <input type="text" id="menuEditDisInput" value={this.state.description} onChange={this.handleEditMenu.bind(this,"description")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1ShiCai">
                                <img src={shicai} alt="shicai" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">食谱食材：</label>
                                <input type="text" id="menuEditShiCaiInput" value={this.state.details} onChange={this.handleEditMenu.bind(this,"details")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1KaLuLi">
                                <img src={qialuli} alt="kaluli" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">卡路里数：</label>
                                <input type="text" id="menuKaLuLiInput" value={this.state.calories} onChange={this.handleEditMenu.bind(this,"calories")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1Fat">
                                <img src={fat} alt="fat" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">脂肪含量：</label>
                                <input type="text" id="menuFatInput" value={this.state.fat} onChange={this.handleEditMenu.bind(this,"fat")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1TanShui">
                                <img src={tanshui} alt="tanshui" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">碳水含量：</label>
                                <input type="text" id="menuTanShuiInput" value={this.state.carbohydrate} onChange={this.handleEditMenu.bind(this,"carbohydrate")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1Dan">
                                <img src={danbaizhi} alt="dan" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">蛋白质量：</label>
                                <input type="text" id="menuDanInput" value={this.state.protein} onChange={this.handleEditMenu.bind(this,"protein")}/>
                            </div>

                            <div className = "menuEditContent1Item" id="menuEditContent1Opt">
                                <img src={opt} alt="step" className="menuEditContent1ItemLogo"/>
                                <label className = "menuEditContent1Label">操作步骤：</label>
                                <input type="text" id="menuStepInput" value={this.state.latestStep} onChange={this.handleEditMenu.bind(this,"latestStep")}/>
                            </div>



                        </div>

                        <div className = "menuEditContent2">
                            <div className = "menuEditContent2Item" id="menuEditContent2Pic">
                                <input type="file" id="menuEditContent2PicChoose" value="" onChange={this.getMenuPicName.bind(this)}/>
                                <div className="menuEditContent2Img">
                                    <img src={this.state.imgUrl} alt="menuLogo" id="menuEditContent2Pic"/>
                                </div>
                            </div>

                            <div className = "menuAddContent2Item" id="menuEditContent2Pic">
                                <input type="file" id="menuAddContent2PicChoose2" onChange={this.getStepPicName.bind(this)}/>
                                <div className="menuAddContent2Img">
                                    <img src={this.state.latestUrl} alt="menuLogo" id="menuEditContent2Pic2"/>
                                </div>

                            </div>

                        </div>

                    </form>

                    <button id="stepEditContentButtonCancel" onClick={this.handleEditStep.bind(this,"cancel")}>取消步骤</button>
                    <button id="stepEditContentButtonSure" onClick={this.handleEditStep.bind(this,"save")}>添加步骤</button>

                    <div className="menuEditContentButton">
                        <button id="menuEditContentButtonCancel" onClick={this.cancelUpdate.bind(this)}>取消</button>
                        <button id="menuEditContentButtonSure" onClick={this.sureUpdate.bind(this)}>保存</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default MenuEdit;
