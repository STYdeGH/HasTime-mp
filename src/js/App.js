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
        </div>
      </Router>
  );
}

export default App;
