import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from "../assets/app-logo.png";
import '../css/login.css'

class SignIn extends Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveUserInfo: PropTypes.func.isRequired,
    }

    state = {
        phone: '',
        password: '',
        role: "0"
    }

    handleInput = (type, event) => {
        let value = event.target.value
        let newState = {}
        newState[type] = value
        this.setState(newState)
    }

    login = async () => {
        let data = {
            username: this.state.phone,
            password: this.state.password,
            role: this.state.role
        }

        let str = this.state.phone + ',' + this.state.password + ',' + this.state.role
        alert(str)
    }

    render() {
        return(
            <div>
            <div className="top">
                <img src={logo} className="nav-logo" alt="logo" />
                <label className="nav-title">Has Time</label>
            </div>
            <div className="login">
            <div  className="login-nav">
            <ul>
            <li className="li-in">sign in</li>
            <li onClick={()=>window.location.href = "/SignUp"} className="li-up">sign up</li>
            </ul>
            </div>
            <form className="login-tab">
            <p>
            <label>手机号</label>
            <input type="text" required="required" placeholder="请输入手机号..."
                   value={this.state.phone} onChange={this.handleInput.bind(this, 'phone')} />
            </p>
            <p>
            <label>密 &nbsp;码&nbsp;</label>
            <input type="password" required="required" placeholder="请输入密码..."
                   value={this.state.password} onChange={this.handleInput.bind(this, 'password')}/>
            </p>

            <p>
            <label>角 &nbsp;色</label>
            <select value={this.state.role} onChange={this.handleInput.bind(this, 'role')}>
                <option value="0" >总管理员</option>
                <option value="1" >分管理员</option>
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