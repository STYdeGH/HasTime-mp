import React from 'react'
import logo from '../assets/logo.png'
import '../css/nav.css'

/*
 @description: 顶部导航栏组件
 */
function Top() {
    return (
        <div className="top-nav">
            <img src={logo} className="nav-logo" alt="logo" />
            <label className="nav-title">Has Time</label>
            <button className="btn-exit" onClick={() => window.location.href = "/"}>exit</button>
        </div>
    )
}

export default Top;


