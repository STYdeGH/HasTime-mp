import React from 'react'
import logo from '../assets/logo.png'
import '../css/nav.css'

function Top() {
    return (
        <div className="top-nav">
            <img src={logo} className="nav-logo" alt="logo" />
            <label className="nav-title">Has Time</label>
            <button className="btn-exit" onClick={()=>this.props.history.push("./coach_check")}>exit</button>
        </div>
    )
}

export default Top;

/*
function Left() {

}

export default Left;
*/

