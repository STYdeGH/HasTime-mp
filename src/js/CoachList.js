import React from 'react'
import  clubLogo from '../assets/icon-club.png'
import avatar from '../assets/coach.png'
import '../css/coachList.css'

/*let data = [];
function getCoachList() {
    let id = "";
    let state = 0;
    let name = "";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://101.200.237.82:8241/swagger-ui.html#/web-controller/getCoachsByAdminIdAndStateAndNameUsingGET",
        data:{
            "adminId": id,
            "state": state,
            "coachName" : name,
        },

        success : function(result){
            data = eval(result).data;
        },

        error : function() {
            alert("ajax异常！");
        }
    })
}*/

function CoachList() {
        return(
            <div className="content" id="content">
                <div className="search-bar">
                    <input type="text" placeholder="请输入您要搜索的内容..."></input>
                    <button type="submit"></button>
                </div>

                <div className="list">
                    <div className="listItem" onClick={()=>window.location.href = "/CoachCheck/detail"}>
                        <img src={avatar} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <div className="listItem">
                        <img src={avatar} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <div className="listItem">
                        <img src={avatar} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <div className="listItem">
                        <img src={avatar} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">coach-name</label>
                    </div>
                    <div className="listItem">
                        <img src={avatar} className="coach-pic" alt="coach-avatar" />
                        <div>
                            <img src={clubLogo} className="club-logo" alt="club-logo"/>
                            <label className="club-name">club-name</label>
                        </div>
                        <label className="coach-name">coach-name</label>
                    </div>
                </div>
            </div>
        )

}

export default CoachList;