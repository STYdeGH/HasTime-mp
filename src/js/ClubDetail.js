import React,{ Component } from 'react'
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


class ClubDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            adminId:"",
            name:"",
            phone:"",
            email:"",
            businessTime:"",
            address:"",
            description:"",
            pictureUrl:"http://qalt8ssmf.bkt.clouddn.com/club1.jpg",
            coachList:[]
        };
    }

    //组件一开始渲染的时候获取某俱乐部的具体信息
    componentDidMount() {
        const dataId = this.props.location.query;
        //alert(dataId.clubId);
        fetch('/user-server/web/getClubInfo?clubId='+dataId.clubId,{
            method:'get',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data.data);
            let clubInfo = {};
            clubInfo["name"] = data.data.name;
            clubInfo["phone"] = data.data.phoneNumber;
            clubInfo["email"] = data.data.email;
            clubInfo["businessTime"] = data.data.businessTime;
            clubInfo["address"] = data.data.location;
            clubInfo["description"] = data.data.description;
            clubInfo["pictureUrl"] = data.data.pictureUrl;

            this.setState(clubInfo);

            //查询管理员
            fetch('/user-server/web/getClubAdmin?clubId='+dataId.clubId,{
                method:'get',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
                },
            }).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data.data);
                let newInfo = {};
                newInfo["adminId"] = data.data.phone;
                this.setState(newInfo);

                //查询该俱乐部下的所有教练
                fetch('/user-server/web/getClubCoachs?clubId='+dataId.clubId,{
                    method:'get',
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
                    },
                }).then((response)=>{
                    return response.json()
                }).then((data)=>{
                    console.log(data.data);
                    let newState = {};
                    newState["coachList"] = data.data;
                    this.setState(
                        newState
                    )
                }).catch(function(error){
                    console.log(error)
                })

            }).catch(function(error){
                console.log(error)
            })

        }).catch(function(error){
            console.log(error)
        })
    }

    toEditClub(){
        const dataId1 = this.props.location.query;
        let data = {
            clubId: dataId1.clubId
        }
        this.props.history.push({ pathname:'/ClubEdit',query:data})
    }

    toDeleteClub(){
        const dataId2 = this.props.location.query;
        //删除一个特定的俱乐部
        fetch('/user-server/web/deleteClub?clubId='+dataId2.clubId,{
            method:'delete',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data.data);
            if(data.data == "success"){
                alert("删除成功");
                this.props.history.push('/ClubManage');
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
        const coachlist = this.state.coachList;

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

                <div className = "mainContent">
                    <div className = "details">
                        <div className = "detailImg">
                            <img src={this.state.pictureUrl} alt="club" className="detailPic"/>
                        </div>

                        <div className = "detailInfo">
                            <div className="detailItem" id="detailAdmin">
                                <img src={manage} alt="logo" className="detailAdminLogo"/>
                                <text className="detailAdminName">{this.state.adminId}</text>
                            </div>

                            <div className="detailItem" id="detailName">
                                <img src={cName} alt="name" className="detailItemLogo"/>
                                <text className="detailItemInfo">{this.state.name}</text>
                            </div>

                            <div className="detailItem" id="detailPhone">
                                <img src={cPhone} alt="phone" className="detailItemLogo"/>
                                <text className="detailItemInfo">{this.state.phone}</text>
                            </div>

                            <div className="detailItem" id="detailEmail">
                                <img src={cEmail} alt="email" className="detailItemLogo"/>
                                <text className="detailItemInfo">{this.state.email}</text>
                            </div>

                            <div className="detailItem" id="detailTime">
                                <img src={cTime} alt="time" className="detailItemLogo"/>
                                <text className="detailItemInfo">{this.state.businessTime}</text>
                            </div>

                            <div className="detailItem" id="detailAddress">
                                <img src={cAddress} alt="address" className="detailItemLogo"/>
                                <text className="detailItemInfo">{this.state.address}</text>
                            </div>

                            <div className="detailItem" id="detailDis">
                                <img src={cDisc} alt="discription" className="detailItemLogo"/>
                                <text className="detailItemInfo">{this.state.description}</text>
                            </div>

                            <div className="detailItem" id="detailOpt">
                                <button className="detailButton" id="buttonEdit" onClick={this.toEditClub.bind(this)}>编辑</button>
                                <button className="detailButton" id="buttonDelete" onClick={this.toDeleteClub.bind(this)}>删除</button>
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
                            {coachlist.map(item =>
                                <div className="coachItem">
                                    <img src={item.avatarUrl} alt="logo" className="coachItemLogo"/>
                                    <text className="coachItemName">{item.nickname}</text>
                                </div>
                            )}

                        </div>


                    </div>

                </div>
            </div>

        )
    }
}

export default ClubDetail;

