import React from 'react'
import logo from '../assets/app-logo.png'
import '../css/nav.css'

function Top() {
    return (
        <div className="top-nav">
            <img src={logo} className="nav-logo" alt="logo" />
            <label className="nav-title">Has Time</label>
            <button className="btn-exit" onClick={()=>window.location.href = "/CoachList"}>exit</button>
        </div>
    )
}

export default Top;



/*
function Left() {

}

export default Left;
*/

