import React from 'react'
import  lockLogo from '../assets/icon-lock.png'
import ali from '../assets/ali.jpg'
import '../css/studentList.css'


class StudentList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="studentList" id="content">
                <div className="search-bar">
                    <input type="text" placeholder="请输入您要搜索的内容..."></input>
                    <button type="submit"></button>
                </div>

                <div className="list-student">
                    <div className="studentItem"  onClick={()=>window.location.href = "/TeachingManageDetail"}>
                        <img src={ali} className="student-pic" alt="student-avatar" />
                        <div className="lock-info">
                            <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <label className="student-name">student-name</label>
                    </div>
                    <div className="studentItem">
                        <img src={ali} className="student-pic" alt="student-avatar" />
                        <div className="lock-info">
                            <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <label className="student-name">student-name</label>
                    </div>
                    <div className="studentItem">
                        <img src={ali} className="student-pic" alt="student-avatar" />
                        <div className="lock-info">
                            <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <label className="student-name">student-name</label>
                    </div>
                    <div className="studentItem">
                        <img src={ali} className="student-pic" alt="student-avatar" />
                        <div>
                            <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <label className="student-name">student-name</label>
                    </div>
                    <div className="studentItem">
                        <img src={ali} className="student-pic" alt="student-avatar" />
                        <div>
                            <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                            <label className="coach-name">coach-name</label>
                        </div>
                        <label className="student-name">student-name</label>
                    </div>
                </div>
            </div>
        )
    }
}

/*function StudentList() {
    let picPath = "../assets/ali.jpg";
    return(
        <div className="content" id="content">
            <div className="search-bar">
                <input type="text" placeholder="请输入您要搜索的内容..."></input>
                <button type="submit"></button>
            </div>

            <div className="list">
                <div className="studentItem">
                    <img src={ali} className="student-pic" alt="student-avatar" />
                    <div>
                        <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <label className="student-name">student-name</label>
                </div>
                <div className="studentItem">
                    <img src={ali} className="student-pic" alt="student-avatar" />
                    <div>
                        <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <label className="student-name">student-name</label>
                </div>
                <div className="studentItem">
                    <img src={ali} className="student-pic" alt="student-avatar" />
                    <div>
                        <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <label className="student-name">student-name</label>
                </div>
                <div className="studentItem">
                    <img src={ali} className="student-pic" alt="student-avatar" />
                    <div>
                        <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <label className="student-name">student-name</label>
                </div>
                <div className="studentItem">
                    <img src={ali} className="student-pic" alt="student-avatar" />
                    <div>
                        <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <label className="student-name">student-name</label>
                </div>
            </div>
        </div>
    )
}*/

export default StudentList;