import React from 'react'
import avatar from '../assets/coach.png'
import '../css/coachList.css'

let adminId;
class CoachList extends React.Component{

    state = {
        coachList: [],
        name: '',
    };

    componentDidMount() {
        adminId = this.getQueryString("adminId");
        fetch('/user-server/web/getCoachsByAdminIdAndState?'+
            `adminId=${this.getQueryString("adminId")}&state=1`, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => res.json())
            .then((data) => {
                let list = data.data;
                console.log('Success:', JSON.stringify(data));
                if(list == "" || list == null){
                    alert("该俱乐部暂无教练");

                }else{
                    this.setState({
                        coachList: list,
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

        if(this.state.name == ''){
            alert("请输入教练姓名");
        }
        else {
            fetch('/user-server/web/getCoachsByAdminIdAndStateAndName?'+
                `adminID=${this.getQueryString("adminId")}&state=1&coachName=${this.state.name}`, {
                method: 'GET',
                headers:new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded;'
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
        }
    };

    render() {
        let list = this.state.coachList.map(function (coach) {
            return(
                <div className="listItem"  key={coach.id}
                     onClick={()=>window.location.href = "/CoachCheckDetail?adminId="
                         + adminId + "&coachId="+coach.id}>
                    <img src={coach.avatarUrl}  className="coach-pic" alt="coach-avatar" />
                    <label className="coach-name">{coach.nickname}</label>
                </div>
            )
        });

        return(
            <div className="content" id="content">
                <div className="search-bar">
                    <input id="sear" type="text" placeholder="请输入您要搜索的教练姓名..."
                           value={this.state.name}
                           onChange={this.handleInput.bind(this, 'name')}/>
                    <button type="submit" onClick={this.search.bind(this)}></button>
                </div>

                <div className="list-coaches">
                    {list}
                </div>
            </div>
        )
    };
}

export default CoachList;