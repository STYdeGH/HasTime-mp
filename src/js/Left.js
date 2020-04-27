import React from 'react'
import checkLogo from '../assets/check.png'
import manageLogo from '../assets/manage.png'
import unlockLogo from '../assets/unlock.png'
import avatar from '../assets/admin-avatar.png'
import '../css/nav.css'

function Left() {
    return (
        <div className="left-nav">
            <img src={avatar} className="avatar" alt="admin-avatar" />
            <div className="user">
                {/*<img src={userLogo} className="user-icon"  alt="user-icon" />*/}
                <label className="username">admin</label></div>
            <ul className="left">
                <li>
                    <img src={checkLogo} className="left-logo" alt="check-icon" />
                    <a href='www.baidu.com'>教练审核</a>
                </li>
                <li>
                    <img src={manageLogo} className="left-logo" alt="manage-icon" />
                    <a href='www.baidu.com'>教练管理</a>
                </li>
                <li>
                <img src={unlockLogo} className="left-logo" alt="unlock-icon" />
                <a href='www.baidu.com'>教学管理</a>
                </li>
            </ul>

        </div>
    )
}

export default Left;