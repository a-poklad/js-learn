import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import RandomQuotes from './components/RandomQuotes';
import Search from './components/Search';

const { Title } = Typography;

class App extends React.Component {
    state = {
      data: [],
      defaultData: [],
    }

    componentDidMount() {
      fetch('https://my.api.mockaroo.com/quotes.json', {
        method: 'GET',
        headers: {
          'X-API-KEY': '2b9e9350',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          this.setState({
            data: resData,
            defaultData: resData,
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

  handleSortListUp = () => {
    this.setState((prevState) => {
      const newArr = [...prevState.data];
      newArr.sort((a, b) => (b.name > a.name ? 1 : -1));

      return ({
        data: newArr,
      });
    });
  }

  handleSortListDown = () => {
    this.setState((prevState) => {
      const newArr = [...prevState.data];
      newArr.sort((a, b) => (a.name > b.name ? 1 : -1));

      return ({
        data: newArr,
      });
    });
  }

  handleChangeInput = (e) => {
    const { value } = e.target;
    console.log(value);
  }

  handleReset = () => {
    const { defaultData } = this.state;
    this.setState({
      data: defaultData,
    });
  }

  render() {
    const {
      data,
    } = this.state;
    return (
      <div className="App">
        <Title className="App-h1">Random Quotes</Title>
        <div className="App-container">
          <Search handleChangeInput={this.handleChangeInput} />
          <RandomQuotes
            data={data}
            handleSortListUp={this.handleSortListUp}
            handleSortListDown={this.handleSortListDown}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
