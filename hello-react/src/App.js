// import한 파일을 webpack이 빌드시에 결합해줌
import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Component 만드는 방법
1) class를 통해서 만들기
2) 함수를 통해서 만들기
*/
class App extends Component {
  // Component 상속한 class는 반드시 render 함수 있어야 함
  render() {
    // JSX를 반환함
    let greeting = "Hello"
    const name = 'react';
    const value = 1;
    // style을 객체 형태로 작성
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return(
      // Fragment를 써서 감싸주면 실제 렌더링시에는 제거됨
      <Fragment>
        <div style={style}>
          {greeting} {name}! 
        </div>
        {/* class명은 className으로 */}
        <div className="App-custom">
          {
            // 조건부 렌더링 (1) : 삼항연산자
            1+1 === 2
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
          }
          {
            // 조건부 렌더링 (2) : AND 연산자
            1+1 === 2 && (<div>맞아요!</div>)
          }
          {
            (function(){
              if (value===1) return (<div>하나</div>)
              if (value===2) return (<div>둘</div>)
              if (value===3) return (<div>셋</div>)
            })()
          }
          {
            // 화살표 함수(arrow function expression) : this/arguments/super 개념이 없는 익명함수
            (() => {
              if (value===1) return (<div>하나</div>)
              if (value===2) return (<div>둘</div>)
              if (value===3) return (<div>셋</div>)
            })()
          }
        </div>
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
      </Fragment>
    );
  }
}


// 다른 곳에서 App 컴포넌트 사용할 수 있도록 내보내기 (index.js 에서 사용함)
export default App;
