import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from "../assets/app-logo.png";
import '../css/login.css';

class SignIn extends Component {
    /*static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveUserInfo: PropTypes.func.isRequired,
    };*/

    state = {
        phone: '',
        password: '',
        role: "0",
        club: 0,
    };

    handleInput = (type, event) => {
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);
    };

    login = async () => {
        fetch('/user-server/web/adminLogin',{
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: `phone=${this.state.phone}&password=${this.state.password}
                &type=${this.state.role}`,
        }).then(response => response.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                let msg = response.data;
                if(msg == "noUser"){
                    alert("该账号不存在");
                }
                else if(msg == "success"){
                    if(this.state.role == "总部") {
                        window.location.href = "/CoachCheck?adminId=" + this.state.club;
                    }
                    else if(this.state.role == "分部"){
                        window.location.href = "/CoachCheck?adminId=" + this.state.phone;
                    }

                }
                else if(msg == "fail"){
                    alert("账号或密码不正确");
                }
            })
            .catch(error => console.error('Error:', error));
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
            <ul className="nav-ul">
            <li className="li-in">sign in</li>
            <li onClick={()=>window.location.href = "/SignUp"} className="li-up">sign up</li>
            </ul>
            </div>
            <form className="login-tab">
            <p>
            <label>手机号</label>
            <input type="text" required="required" placeholder=" 请输入手机号..."
                   value={this.state.phone} onChange={this.handleInput.bind(this, 'phone')} />
            </p>
            <p>
            <label>密 &nbsp;码&nbsp;</label>
            <input type="password" required="required" placeholder=" 请输入密码..."
                   value={this.state.password} onChange={this.handleInput.bind(this, 'password')}/>
            </p>

            <p>
            <label>角 &nbsp;色</label>
            <select value={this.state.role} onChange={this.handleInput.bind(this, 'role')}>
                <option value="总部" >总管理员</option>
                <option value="分部" >分管理员</option>
            </select>
            </p>

            </form>
            <button className="btn-login" onClick={this.login}>登 录</button>
            </div>
            </div>
        )
    }
}

export default SignIn