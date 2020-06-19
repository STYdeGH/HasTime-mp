import React,{ Component } from 'react'
import logo from "../assets/app-logo.png";
import '../css/signUp.css'

let style = {display: "none"}

/*
 @description: 注册组件
 */
class SignUp extends Component {
    state = {
        phone: '',
        password: '',
        again: '',
        role: "0",
        club: 0,
        clubList: []
    };

    //处理输入
    handleInput = (type, event) => {
        let value = event.target.value
        let newState = {}
        newState[type] = value
        //若是分部管理员，需要加载俱乐部列表
        if(newState.role == "分部") {
            fetch('/user-server/web/getNoAdminClubs',{
                method: 'GET',
                mode: "cors",
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }).then(res => res.json())
                .then((data) => {
                    let list = data.data;
                    if(list == "" || list == null){
                        alert("暂无缺乏管理员的俱乐部");

                    }
                    else{
                        this.setState({
                            clubList: list,
                            club: list[0].id.toString(),
                        });
                        console.log(this.state.clubList);
                        document.getElementById("clubBox").style.display = "inline";
                    }

                })
                .catch((error) => {
                    alert(error)
                })
        }
        if(newState.role == "总部") {
            document.getElementById("clubBox").style.display = "none";
        }
        this.setState(newState);

    };

    //注册
    register = async () => {
        if(this.state.phone == '') {
            alert("请输入手机号");
            return;
        }
        if(this.state.password == '') {
            alert("请输入密码");
            return;
        }
        if(this.state.again == '') {
            alert("请确认密码");
            return;
        }

        if(this.state.password != this.state.again) {
            alert("您两次输入的密码不一致，请重新输入")
            window.location.reload()
        }
        else{
            fetch('/user-server/web/adminRegister', {
                method: 'POST',
                headers:new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body: `phone=${this.state.phone}&password=${this.state.password}
                &type=${this.state.role}&clubId=${this.state.club}`,
            }).then(response => response.json())
                .then((data) => {
                    console.log('Success:', JSON.stringify(data));
                let msg = data.data;
                if(msg == "exist"){
                    alert("该手机号已注册账号");
                }
                else if(msg == "success"){
                    window.location.href = "/";
                }
                else{
                    alert("注册失败！");
                }

            })
                .catch(error => console.error('Error:', error));
        }
    };

    render() {
        return(
            <div>
                <div className="top">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <label className="nav-title">Has Time</label>
                </div>
                <div className="login">
                    <div  className="login-nav">
                        <ul className="login-ul">
                            <li onClick={()=>window.location.href = "/"} className="in">sign in</li>
                            <li className="up">sign up</li>
                        </ul>
                    </div>
                    <form className="login-tab">
                        <p>
                            <label>&nbsp;手 机 号</label>
                            <input type="text" required="required" placeholder=" 请输入手机号..."
                                   value={this.state.phone}
                                   onChange={this.handleInput.bind(this, 'phone')} />
                        </p>
                        <p>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密 码</label>
                            <input type="password" required="required" placeholder=" 请输入密码..."
                                   id="pwd" value={this.state.password}
                                   onChange={this.handleInput.bind(this, 'password')}/>
                        </p>

                        <p>
                            <label>确认密码</label>
                            <input type="password" required="required" placeholder=" 请再次输入密码..."
                                   id="again" value={this.state.again}
                                   onChange={this.handleInput.bind(this, 'again')}/>
                        </p>
                        <p>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;角 色</label>
                            <select value={this.state.role} onChange={this.handleInput.bind(this, 'role')}>
                                <option value="总部" >总管理员</option>
                                <option value="分部" >分管理员</option>
                            </select>
                        </p>
                        <p id="clubBox" style={style} placeholder="请选择俱乐部">
                            <label>&nbsp;俱 乐 部</label>
                            <select value={this.state.club} onChange={this.handleInput.bind(this, 'club')}>
                                {

                                    this.state.clubList.map(function (club) {
                                        return(
                                            <option value={club.id} key={club.id}>{club.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </p>

                    </form>
                    <button className="btn-reg"  onClick={this.register.bind(this)}>注 册</button>
                </div>
            </div>
        )
    }
}

export default SignUp;