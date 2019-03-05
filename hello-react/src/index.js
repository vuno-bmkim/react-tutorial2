import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 첫번째 파라미터는 "렌더링 할 결과물", 두번째 파라미터는 "컴포넌트를 어떤 DOM에 그릴지"
// id가 'root'인 DOM은 public/index.html에 있음
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
