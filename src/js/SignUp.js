import React from 'react';
import ReactDOM from 'react-dom';
import logo from "../assets/app-logo.png";

import '../css/signUp.css'
function SignUp() {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <div className="top">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <label className="nav-title">Has Time</label>
                </div>
                <div className="login-box">
                    <div  className="login-nav">
                    <ul>
                        <li onClick={()=>window.location.href = "/Login"} className="in">sign in</li>
                        <li className="up">sign up</li>
                    </ul>
                    </div>
                    <form className="login-tab">
                        <p>
                            <label>&nbsp;手 机 号</label>
                            <input type="text" required="required" placeholder="请输入手机号..." /></p>
                        <p>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密 码</label>
                            <input type="password" required="required" placeholder="请输入密码..." />
                        </p>
                        <p>
                            <label>确认密码</label>
                            <input type="password" required="required" placeholder="请再次输入密码..." />
                        </p>
                        <p>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;角 色</label>
                            <select>
                                <option>总管理员</option>
                                <option>分管理员</option>
                            </select>
                        </p>
                    </form>
                    <button className="btn-reg">注 册</button>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

export default SignUp;