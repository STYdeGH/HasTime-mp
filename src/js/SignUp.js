import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from "../assets/app-logo.png";
import '../css/signUp.css'

class SignUp extends Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveUserInfo: PropTypes.func.isRequired,
    }

    state = {
        phone: '',
        password: '',
        again: '',
        role: "0"
    }

    handleInput = (type, event) => {
        let value = event.target.value
        let newState = {}
        newState[type] = value
        this.setState(newState)
    }

    register = async () => {
        if(this.state.password != this.state.again) {
            alert("您两次输入的密码不一致，请重新输入")
            window.location.reload()
        }
        else{
            let data = {
                username: this.state.phone,
                password: this.state.password,
                role: this.state.role
            }

            let str = this.state.phone + ',' + this.state.password + ',' + this.state.role
            alert(str)
        }


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
                            <li onClick={()=>window.location.href = "/Login"} className="in">sign in</li>
                            <li className="up">sign up</li>
                        </ul>
                    </div>
                    <form className="login-tab">
                        <p>
                            <label>&nbsp;手 机 号</label>
                            <input type="text" required="required" placeholder="请输入手机号..."
                                   value={this.state.phone} onChange={this.handleInput.bind(this, 'phone')} />
                        </p>
                        <p>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密 码</label>
                            <input type="password" required="required" placeholder="请输入密码..." id="pwd"
                                   value={this.state.password} onChange={this.handleInput.bind(this, 'password')}/>
                        </p>

                        <p>
                            <label>确认密码</label>
                            <input type="password" required="required" placeholder="请再次输入密码..." id="again"
                                   value={this.state.again} onChange={this.handleInput.bind(this, 'again')}/>
                        </p>
                        <p>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;角 色</label>
                            <select value={this.state.role} onChange={this.handleInput.bind(this, 'role')}>
                                <option value="0" >总管理员</option>
                                <option value="1" >分管理员</option>
                            </select>
                        </p>

                    </form>
                    <button className="btn-reg"  onClick={this.register}>注 册</button>
                </div>
            </div>
        )
    }
}

export default SignUp;