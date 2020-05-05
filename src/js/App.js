import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CoachCheck from './CoachCheck';
import CoachManage from './CoachManage'
import TeachingManage from './TeachingManage'

function App() {
  return(
      <Router>
        <div>
          <Route path="/CoachCheck" component={CoachCheck} />
          <Route path="/CoachManage" component={CoachManage} />
            <Route path="/TeachingManage" component={TeachingManage} />
        </div>
      </Router>
  );
}

export default App;
