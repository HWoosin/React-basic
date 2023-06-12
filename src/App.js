// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import SayHello from './SayHello';
import SubmitEvent from './component/chap01 event/SubmitEvent';
import ChangeEvent from './component/chap01 event/ChangeEvent';
import ClickEvent from './component/chap01 event/ClickEvent';

//리액트에서는 하나의 컴포넌트가 여러개의 엘리먼트 반환 가능.
//JSX를 작성할 때 return 문 안에 반드시 하나의 최상위 태그가 있어야 한다.
//Fragment를 사용하면 의미없는 태그를 줄여 가독성을 좋게 한다.
function App() {

  const looping = function(){
    const helloList = [];

    for(let i=0; i<5; i++){
      helloList.push(<SayHello/>);
    }
    return helloList;
  }

  //jsx 문법에서는 스크립트를 코드로 직접 사용이 불가능.
  //{} 안에서 함수의 호출문이나 변수참조는 가능.
  return (
    <>
      <SubmitEvent/>
    </> //프레그먼트 div가 표현이 안됨

//    <div className="App">
//    <header className="App-header">
//      <img src={logo} className="App-logo" alt="logo" />
//      <p>
//        Edit <code>src/App.js</code> and save to reload.
//      </p>
//      <a
//        className="App-link"
//        href="https://reactjs.org"
//        target="_blank"
//        rel="noopener noreferrer"
//      >
//        Learn React
//      </a>
//    </header>
//  </div>
  );
}

export default App;
