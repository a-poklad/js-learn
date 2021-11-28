import React, { useEffect, useState } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import Data from "./components/Data";
// import TemperatureConverter from "./components/TemperatureConverter";
// import TestRef from "./components/TestRef";
// import RandomQuotes from "./components/RandomQuotes";
// import MouseControl from './components/MouseControl';
// import StepCount from './components/StepCount';
// import SetCountWithReducer from './components/SetCountWithReducer';
import Users from './components/Users';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount(count + 1)
    }, 1000);
    return () => clearInterval(countInterval);
  }, [count]);



  return <div className="App">
    <Users count={count}/>
    {/*<StepCount/>*/}
    {/*<SetCountWithReducer/>*/}
    {/*<Counter/>*/}
    {/*<Data/>*/}
    {/*<TemperatureConverter/>*/}
    {/*<div>*/}
    {/*  <button onClick={() => this.myRef.current.focus()}>Click</button>*/}
    {/*  <TestRef ref={this.myRef}/>*/}
    {/*</div>*/}
    {/*<MouseControl render={(mouse) => <p>The current mouse position is ({mouse.x}, {mouse.y})</p>*/}
    {/*}/>*/}
    {/*<RandomQuotes/>*/}
  </div>;
}

export default App;
