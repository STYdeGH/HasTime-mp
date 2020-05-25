import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/menuManage.css'
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
import menu from '../assets/menu.png'
import menuType from '../assets/menuType.png'
import lightMenu from '../assets/lightMenu.png'


import {white} from "color-name";

class MenuManage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            recipeList:[]
        };
    }

    //组件一开始渲染的时候获取所有的食谱信息
    componentDidMount() {
        fetch('/diet-service/recipe/all?page=0&pageSize=100',{
            method: 'GET',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                //检查每一个食谱
                let rList = data.data;
                let del = 0;
                //alert(data.data)
                for(let i=0;i<data.data.length;i++){
                    let id = data.data[i].id;
                    //alert(id);
                    fetch('/diet-service/recipe/'+id,{
                        method: 'GET',
                        mode: "cors",
                        headers:{
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    }).then(res => res.json())
                        .then((data) => {
                            //console.log(data);
                            if(data.msg == "操作成功！"){
                                rList[i] = data.data;
                            }
                            else{
                                rList[i] = {};
                            }

                        })
                        .catch((error) => {
                            alert(error)
                        })
                }

                this.setState({
                    recipeList: rList,
                });
                console.log(this.state.recipeList);
            })
            .catch((error) => {
                alert(error)
            })
    }

    handleMenuClick = (type, event) =>{
        if(type == "add"){
            this.props.history.push('/MenuAdd');
        }
        else if(type == "search"){
            let searchName = document.getElementById("menuSearch").value;
            //alert(searchName);
            fetch('/diet-service/recipe/name/'+searchName+"?page=0&pageSize=100",{
                method:'get',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
                },
            }).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data)
                let newMenuList = data.data;
                let newState = {};
                newState["recipeList"] = newMenuList
                this.setState(newState);
            }).catch(function(error){
                console.log(error)
            })
        }
        else{
            let recipeId = type;
            //alert(clubId);
            let data = {
                recipeId: recipeId
            }
            this.props.history.push({ pathname:'/MenuDetail',query:data})
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
        const list = this.state.recipeList;
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

                <div className = "main-menuContent">
                    <div className="addNewMenu">
                        <button className="addNewMenuButton" onClick={this.handleMenuClick.bind(this,"add")}>添加新的食谱</button>
                    </div>

                    <div className = "searchBarM">
                            <input type="text" id="menuSearch" placeholder="请输入你要搜索的食谱名称..."/>
                            <button type="submit" onClick={this.handleMenuClick.bind(this,"search")}></button>
                    </div>

                    <div className="menuList">
                        {list.map(menuItem =>
                            <div className="menuItem" key={menuItem.id.toString()} onClick={this.handleMenuClick.bind(this,menuItem.id.toString())}>
                                <img src={menuItem.imgUrl} alt="manageMenu" className="menuPic"/>
                                <div className="menuName">
                                    <img src={menu} alt="name" className="menuNameLogo"/>
                                    <text className="menuNameText">{menuItem.name}</text>
                                </div>
                                <div className="menuType">
                                    <img src={menuType} alt="type" className="menuTypeLogo"/>
                                    <text className="menuTypeText">{menuItem.classification}</text>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>

        )
    }
}

export default MenuManage;


