import React from 'react'
import  clubLogo from '../assets/icon-club.png'
import ali from '../assets/ali.jpg'
import '../css/coachList.css'


class StudentList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="content" id="content">
                <div className="search-bar">
                    <input type="text" placeholder="请输入您要搜索的内容..."></input>
                    <button type="submit"></button>
                </div>

                <div className="list">
                    <div className="listItem">
                        <img src={ali} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">student-name</label>
                    </div>
                    <div className="listItem">
                        <img src={ali} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">student-name</label>
                    </div>
                    <div className="listItem">
                        <img src={ali} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">student-name</label>
                    </div>
                    <div className="listItem">
                        <img src={ali} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">student-name</label>
                    </div>
                    <div className="listItem">
                        <img src={ali} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">student-name</label>
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
                <div className="listItem">
                    <img src={ali} className="coach-pic" alt="coach-avatar" />
                    <div>
                        <img src={clubLogo} className="club-logo" alt="club-logo"/>
                        <label className="club-name">club-name</label>
                    </div>
                    <label className="coach-name">student-name</label>
                </div>
                <div className="listItem">
                    <img src={ali} className="coach-pic" alt="coach-avatar" />
                    <div>
                        <img src={clubLogo} className="club-logo" alt="club-logo"/>
                        <label className="club-name">club-name</label>
                    </div>
                    <label className="coach-name">student-name</label>
                </div>
                <div className="listItem">
                    <img src={ali} className="coach-pic" alt="coach-avatar" />
                    <div>
                        <img src={clubLogo} className="club-logo" alt="club-logo"/>
                        <label className="club-name">club-name</label>
                    </div>
                    <label className="coach-name">student-name</label>
                </div>
                <div className="listItem">
                    <img src={ali} className="coach-pic" alt="coach-avatar" />
                    <div>
                        <img src={clubLogo} className="club-logo" alt="club-logo"/>
                        <label className="club-name">club-name</label>
                    </div>
                    <label className="coach-name">student-name</label>
                </div>
                <div className="listItem">
                    <img src={ali} className="coach-pic" alt="coach-avatar" />
                    <div>
                        <img src={clubLogo} className="club-logo" alt="club-logo"/>
                        <label className="club-name">club-name</label>
                    </div>
                    <label className="coach-name">student-name</label>
                </div>
            </div>
        </div>
    )
}*/

export default StudentList;