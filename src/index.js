import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Top from './js/Top';
import App from './js/App';
import HeadSide from './js/Head-Side';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Top />
      <HeadSide />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var tDivs = document.getElementsByClassName("top-nav");
var topDiv = tDivs[0];
var height = topDiv.offsetHeight;

var topTs = document.getElementsByClassName("nav-title");
var topTitle = topTs[0];
topTitle.style.fontSize = height / 2 + "px";
//topTitle.style.top = height / 8 + "px";

var bDivs = document.getElementsByClassName("btn-exit");
var topBut = bDivs[0];
var bHeight = topBut.offsetHeight;
var bWidth = topBut.offsetWidth;
var final = bHeight;
if(bWidth < bHeight){
    final = bWidth;
}
topBut.style.fontSize = final / 2 + "px";

console.log(bHeight);