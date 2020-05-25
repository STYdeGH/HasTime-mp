import React from 'react'
import  lockLogo from '../assets/icon-lock.png'
import ali from '../assets/ali.jpg'
import '../css/studentList.css'

let adminId;
class StudentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            name: "",
        };
    }

    componentWillMount() {
        adminId = this.getQueryString("adminId");
        fetch('/user-server/web/getGymStudents?'+
            `adminID=${this.getQueryString("adminId")}`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let list = data.data;
                console.log('Success:', JSON.stringify(data));
                if(list == "" || list == null){
                    alert("暂无学员");

                }else{
                    this.setState({
                        studentList: list,
                    });

                }

            })
            .catch(error => console.error('Error:', error));

    };

    getQueryString = (name) => {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    handleInput = (type, event) => {
        let value = event.target.value;
        let newState = {};
        newState[type] = value;
        this.setState(newState);

    };

    search = () => {
        console.log(this.state.name);
        fetch('/user-server/web/getCoachsByAdminIdAndStateAndName?'+
            `adminID=${this.getQueryString("adminId")}&state=0&
            coachName=${this.state.name}`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let list = data.data;
                console.log('Success:', JSON.stringify(data));
                if(list == "" || list == null){
                    alert("未找到相关信息");

                }else{
                    this.setState({
                        coachList: list,
                    });

                }

            })
            .catch(error => console.error('Error:', error));
    };

    render() {
        let studentList = this.state.studentList.map(function (student) {
            return(
                <div className="studentItem"  key={student.id}
                     onClick={()=>window.location.href = "/TeachingManageDetail?adminId="
                         + adminId + "&studentId="+ student.id}>
                    <img src={student.avatarUrl}  className="student-pic" alt="student-avatar" />
                    {/*<div className="lock-info">
                        <img src={lockLogo} className="lock-logo" alt="lock-logo"/>
                        <label className="coach-name">coach-name</label>
                    </div>*/}
                    <label className="student-name">{student.nickname}</label>
                </div>
            )
        });

        return(
            <div className="studentList" id="content">
                <div className="search-bar">
                    <input type="text" placeholder="请输入您要搜索的内容..."
                           value={this.state.name} onChange={this.handleInput.bind(this, 'name')}/>
                    <button type="submit" onClick={this.search.bind(this)}></button>
                </div>

                <div className="list-student">
                    {studentList}
                </div>
            </div>
        )
    }
}

export default StudentList;