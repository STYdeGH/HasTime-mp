import React from 'react';
import ReactDOM from 'react-dom';

import ali from '../assets/coach.png'
import clubLogo from '../assets/icon-club.png'
import Top from './Top';
import Left from './Left';
import '../css/detail.css'

let name = "张三";
let gender = "女";
let age = 25;
let phone = "8888888";
let comment = "瑜伽，塑身教练";
function CoachCheckDetail() {

    return(
        ReactDOM.render(
            <React.StrictMode>
                <Top/>
                <Left/>
                <div className="content">
                    <img src={ali} className="avatar" alt="coach-avatar" />
                    <div className="club-info">
                        <img src={clubLogo} className="club-icon" alt="club-icon" />
                        <label className="club-name">club-name</label>
                    </div>
                    <div className="coach-info">
                        <ul>
                            <li className="icon-name"><label>{name}</label></li>
                            <li className="icon-gender"><label>{gender}</label></li>
                            <li className="icon-age"><label>{age}</label></li>
                            <li  className="icon-phone"><label>{phone}</label></li>
                            <li className="icon-comment"><label>{comment}</label></li>
                        </ul>
                    </div>
                    <div className="operation">
                        <button className="btn-pass">通过</button>
                        <button className="btn-refuse">拒绝</button>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )

    )
}

export default CoachCheckDetail;