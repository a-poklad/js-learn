import React from 'react'
import './App.css';
import Counter from './components/Counter';
import Data from "./components/Data";
import TemperatureConverter from "./components/TemperatureConverter";
import TestRef from "./components/TestRef";
import RandomQuotes from "./components/RandomQuotes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div className="App">
      <Counter/>
      <Data/>
      <TemperatureConverter/>
      <div>
        <button onClick={() => this.myRef.current.focus()}>Click</button>
        <TestRef ref={this.myRef}/>
      </div>
      <RandomQuotes/>
    </div>
  }
}

export default App;
