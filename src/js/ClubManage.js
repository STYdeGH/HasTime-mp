import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/clubManage.css'
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


import {white} from "color-name";


class ClubManage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            clubList:[]
        };
    }

    //组件一开始渲染的时候获取所有的俱乐部信息
    componentDidMount() {
        fetch('/user-server/web/getAllClubs',{
            method: 'GET',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    clubList: data.data,
                });
                console.log(this.state.clubList);
            })
            .catch((error) => {
                alert(error)
            })
    }

    handleClick = (type, event) =>{
        if(type == "add"){
            this.props.history.push('/ClubAdd');
        }
        else if(type == "search"){
            let searchName = document.getElementById("clubSearch").value;
            //alert(searchName);
            fetch('/user-server/web/findClubsByName',{
                method:'post',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
                },
                body:`input=${searchName}`
            }).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data)
                let newClubList = data.data;
                let newState = {};
                newState["clubList"] = newClubList
                this.setState(newState);
            }).catch(function(error){
                console.log(error)
            })
        }
        else{
            let clubId = type;
            //alert(clubId);
            let data = {
                clubId: clubId
            }
            this.props.history.push({ pathname:'/ClubDetail',query:data})
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
        const list = this.state.clubList;
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

                    <div className="sideItem" style={{marginTop:'5%'}} onClick={this.jumpClub.bind(this)}>
                        <img src={manageClub} alt="manageClub" className="sidePic"/>
                        <text className="sideText">俱乐部管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'white'}} onClick={this.jumpMenu.bind(this)}>
                        <img src={manageMenu} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>食谱管理</text>
                    </div>

                    <div className="sideItem" style={{backgroundColor:'white'}} onClick={this.jumpAct.bind(this)}>
                        <img src={manageAct} alt="manageClub" className="sidePic"/>
                        <text className="sideText" style={{fontWeight: 'normal'}}>活动管理</text>
                    </div>

                </div>

                <div className = "main-content">
                    <div className="addNewClub">
                        <button className="addNewClubButton" onClick={this.handleClick.bind(this,"add")}>添加新的俱乐部</button>
                    </div>

                    <div className = "searchBar1">
                            <input type="text" placeholder="请输入你要搜索的俱乐部名称..." id="clubSearch"/>
                            <button onClick={this.handleClick.bind(this,"search")}></button>
                    </div>

                    <div className="clubList">

                        {list.map(clubItem =>
                            <div className="clubItem" key={clubItem.id.toString()} onClick={this.handleClick.bind(this,clubItem.id.toString())}>
                                <img src={clubItem.pictureUrl} alt="manageClub" className="clubPic"/>
                                <div className="clubName">
                                    <img src={name} alt="name" className="nameLogo"/>
                                    <text className="name">{clubItem.name}</text>
                                </div>
                                <div className="clubAddress">
                                    <img src={address} alt="address" className="addressLogo"/>
                                    <text className="address">{clubItem.location}</text>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>

        )
    }
}

export default ClubManage;
