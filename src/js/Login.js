import React from 'react';
import ReactDOM from 'react-dom';
import logo from "../assets/app-logo.png";

import '../css/login.css'
function Login() {
    return(
        ReactDOM.render(
            <React.StrictMode>
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
                            <input type="text" required="required" placeholder="请输入手机号..." /></p>
                        <p>
                            <label>密 &nbsp;码&nbsp;</label>
                            <input type="password" required="required" placeholder="请输入密码..." />
                        </p>

                        <p>
                            <label>角 &nbsp;色</label>
                            <select>
                                <option>总管理员</option>
                                <option>分管理员</option>
                            </select>
                        </p>

                    </form>
                    <button className="btn-login">登 录</button>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

export default Login;