import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/headSide.css'
import '../css/nav.css'
import '../css/index.css'
import '../css/clubEdit.css'
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
import {white} from "color-name"

class ClubEdit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            adminId:"",
            adminPhone:"",
            name:"",
            phone:"",
            email:"",
            businessTime:"",
            address:"",
            description:"",
            pictureUrl:""
        };
    }

    componentDidMount(){
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
                newInfo["adminId"] = data.data.id;
                newInfo["adminPhone"] = data.data.phone;
                this.setState(newInfo);

            }).catch(function(error){
                console.log(error)
            })
        }).catch(function(error){
            console.log(error)
        })
    }

    getNewPicName(){
        let cloudUrl = "http://qalt8ssmf.bkt.clouddn.com/";
        let url = ""
        let file = document.getElementById("clubEditContent2PicChoose");
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
        document.getElementById("clubEditContent2Pic").src=allUrl;
        let newState = {};
        newState["pictureUrl"] = allUrl;
        this.setState(newState);
        //alert(this.state.name);
    }

    handleNewClubInfo=(type,event)=>{
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    }

    cancelUpdate(){
        alert("已取消！！！");
        const dataId1 = this.props.location.query;
        let data = {
            clubId: dataId1.clubId
        }
        this.props.history.push({ pathname:'/ClubDetail',query:data})
    }

    ensureUpdate(){
        let name = this.state.name;
        let phone = this.state.phone;
        let email = this.state.email;
        let businessTime = this.state.businessTime;
        let address = this.state.address;
        let description = this.state.description;
        let pictureUrl = this.state.pictureUrl;
        const dataId2 = this.props.location.query;
        fetch('/user-server/web/modifyClub',{
            method:'post',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
            body:`name=${name}&phone=${phone}&email=${email}&businessTime=${businessTime}&address=${address}&description=${description}&pictureUrl=${pictureUrl}&clubId=${dataId2.clubId}`
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            if(data.data=="success"){
                alert("更新成功");
                let data = {
                    clubId: dataId2.clubId
                }
                this.props.history.push({ pathname:'/ClubDetail',query:data})
            }
            else{
                alert("更新失败");
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    removeAdmin(){
        const dataId3 = this.props.location.query;
        let data3 = {
            clubId: dataId3.clubId
        }
        fetch('/user-server/web/clubRemoveAdmin',{
            method:'post',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
            },
            body:`clubId=${dataId3.clubId}`
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            let newState = {};
            newState["adminId"] = "";
            newState["adminPhone"] = "";
            this.setState(newState);
            this.props.history.push({ pathname:'/ClubEdit',query:data3})
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

                <div className = "clubEditContent">
                    <form className = "clubEditInfo">
                        <div className = "clubEditContent1">
                            <div className = "clubEditContent1Item" id="clubEditContent1Name">
                                <img src={cName} alt="address" className="clubEditContent1ItemLogo"/>
                                <label className = "clubEditContent1Label">俱乐部名称：</label>
                                <input type="text" id="nameInput" value={this.state.name} onChange={this.handleNewClubInfo.bind(this,"name")}/>
                            </div>

                            <div className = "clubEditContent1Item" id="clubEditContent1Phone">
                                <img src={cPhone} alt="address" className="clubEditContent1ItemLogo"/>
                                <label className = "clubEditContent1Label">俱乐部电话：</label>
                                <input type="text" id="phoneInput" value={this.state.phone} onChange={this.handleNewClubInfo.bind(this,"phone")}/>
                            </div>

                            <div className = "clubEditContent1Item" id="clubEditContent1Email">
                                <img src={cEmail} alt="address" className="clubEditContent1ItemLogo"/>
                                <label className = "clubEditContent1Label">俱乐部邮箱：</label>
                                <input type="text" id="emailInput" value={this.state.email} onChange={this.handleNewClubInfo.bind(this,"email")}/>
                            </div>

                            <div className = "clubEditContent1Item" id="clubEditContent1Time">
                                <img src={cTime} alt="address" className="clubEditContent1ItemLogo"/>
                                <label className = "clubEditContent1Label">日营业时间：</label>
                                <input type="text" id="timeInput" value={this.state.businessTime} onChange={this.handleNewClubInfo.bind(this,"businessTime")}/>
                            </div>

                            <div className = "clubEditContent1Item" id="clubEditContent1Address">
                                <img src={cAddress} alt="address" className="clubEditContent1ItemLogo"/>
                                <label className = "clubEditContent1Label">俱乐部地址：</label>
                                <input type="text" id="addressInput" value={this.state.address} onChange={this.handleNewClubInfo.bind(this,"address")}/>
                            </div>

                            <div className = "clubEditContent1Item" id="clubEditContent1Dis">
                                <img src={cDisc} alt="discription" className="clubEditContent1ItemLogo"/>
                                <label className = "clubEditContent1Label">其它的信息：</label>
                                <input type="text" id="disInput" value={this.state.description} onChange={this.handleNewClubInfo.bind(this,"description")}/>
                            </div>

                            <div className = "clubEditContent1Item" id="clubEditContent1Admin">
                                <img src={headadmin} alt="admin" className="clubEditContent1ItemLogo" id="clubEditAdminLogo"/>
                                <text id="clubEditAdminText">{this.state.adminPhone}</text>
                                <button id="clubEditAdminButton" onClick={this.removeAdmin.bind(this)}>解绑</button>
                            </div>

                        </div>

                        <div className = "clubEditContent2">
                            <div className = "clubEditContent2Item" id="clubEditContent2Pic">
                                <input type="file" name="sex" id="clubEditContent2PicChoose" value="" onChange={this.getNewPicName.bind(this)}/>
                                <div className="clubEditContent2Img">
                                    <img src={this.state.pictureUrl} alt="clubLogo" id="clubEditContent2Pic"/>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div className="clubEditContentButton">
                        <button id="clubEditContentButtonCancel" onClick={this.cancelUpdate.bind(this)}>取消</button>
                        <button id="clubEditContentButtonSure" onClick={this.ensureUpdate.bind(this)}>确认</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default ClubEdit;
