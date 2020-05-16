import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CoachCheck from './CoachCheck';
import CoachManage from './CoachManage'
import TeachingManage from './TeachingManage'
import CoachList from "./CoachList";
import CoachCheckDetail from "./CoachCheckDetail";
import CoachManageDetail from "./CoachManageDetail";
import TeachingManageDetail from "./TeachingManageDetail";
import CoachAssign from "./CoachAssign";
import SignUp from "./SignUp";
import Login from "./Login";
import Top from './Top';
import HeadSide from './Head-Side';
import ClubManage from './ClubManage';
import ClubDetail from './ClubDetail';
import ClubEdit from './ClubEdit';
import ClubAdd from './ClubAdd';
import CourseManage from './CourseManage';
import CourseDetail from './CourseDetail';
import CourseEdit from './CourseEdit';
import CourseAdd from './CourseAdd';
import ActivityManage from './ActivityManage';
import ActivityDetail from './ActivityDetail';
import ActivityEdit from './ActivityEdit';
import ActivityAdd from './ActivityAdd';
import MenuManage from './MenuManage';
import MenuDetail from './MenuDetail';
import MenuEdit from './MenuEdit';
import MenuAdd from './MenuAdd';

import '../css/App.css';

function App() {
  return(
      <Router>
        <div>
            <Route path={"/Login"} component={Login} />
            <Route path={"/SignUp"} component={SignUp} />
            <Route path="/CoachList" component={CoachList} />
            <Route path="/CoachCheck" component={CoachCheck} />
            <Route path="/CoachCheck/detail" component={CoachCheckDetail} />
            <Route path="/CoachManage" component={CoachManage} />
            <Route path="/CoachManage/detail" component={CoachManageDetail} />
            <Route path="/CoachManage/detail/assign" component={CoachAssign} />
            <Route path="/TeachingManage" component={TeachingManage} />
            <Route path="/TeachingManage/detail" component={TeachingManageDetail} />
            <Route path="/Top" component={Top} />
            <Route path="/HeadSide" component={HeadSide} />
            <Route path="/ClubManage" component={ClubManage} />
            <Route path="/ClubDetail" component={ClubDetail} />
            <Route path="/ClubEdit" component={ClubEdit} />
            <Route path="/ClubAdd" component={ClubAdd} />
            <Route path="/CourseManage" component={CourseManage} />
            <Route path="/CourseDetail" component={CourseDetail} />
            <Route path="/CourseEdit" component={CourseEdit} />
            <Route path="/CourseAdd" component={CourseAdd} />
            <Route path="/ActivityManage" component={ActivityManage} />
            <Route path="/ActivityDetail" component={ActivityDetail} />
            <Route path="/ActivityEdit" component={ActivityEdit} />
            <Route path="/ActivityAdd" component={ActivityAdd} />
            <Route path="/MenuManage" component={MenuManage} />
            <Route path="/MenuDetail" component={MenuDetail} />
            <Route path="/MenuEdit" component={MenuEdit} />
            <Route path="/MenuAdd" component={MenuAdd} />
        </div>
      </Router>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
