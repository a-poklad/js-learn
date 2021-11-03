import React from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RandomQuotesList from '../RandomQuotesList';
import Search from '../Search';
import BUTTON_STATE from '../../constans';
import SortingQuotes from '../SortingQuotes';
import getRandomInRange from '../../utils/getRandomInRange';
import debounce from '../../utils/debounce';

const { Title } = Typography;

class QuotesListContainer extends React.Component {
  state = {
    data: [],
    dataSorting: [],
    nameSortingButtonState: BUTTON_STATE.DEFAULT,
    quoteSortingButtonState: BUTTON_STATE.DEFAULT,
    inputValue: '',
  }

  componentDidMount() {
    const inputValue = JSON.parse(sessionStorage.getItem('inputValue'));
    if (sessionStorage.getItem('list') && inputValue) {
      this.setState(() => ({
        data: JSON.parse(sessionStorage.getItem('list')),
        inputValue,
      }), () => {
        this.handleChangeInput(inputValue);
      });
    } else {
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
          sessionStorage.setItem('list', JSON.stringify(resData));
          this.setState({
            data: resData,
            dataSorting: resData,
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  handleSortList = (key) => {
    if (key === 'name') {
      this.setState({
        quoteSortingButtonState: BUTTON_STATE.DEFAULT,
      });
    } else {
      this.setState({
        nameSortingButtonState: BUTTON_STATE.DEFAULT,
      });
    }
    this.setState((prevState) => {
      const newArr = [...prevState.data];

      if (prevState[`${key}SortingButtonState`] === BUTTON_STATE.DEFAULT) {
        newArr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        return ({
          dataSorting: newArr,
          [`${key}SortingButtonState`]: BUTTON_STATE.UP,
        });
      }
      if (prevState[`${key}SortingButtonState`] === BUTTON_STATE.UP) {
        newArr.sort((a, b) => (b[key] > a[key] ? 1 : -1));
        return ({
          dataSorting: newArr,
          [`${key}SortingButtonState`]: BUTTON_STATE.DOWN,
        });
      }

      newArr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      sessionStorage.setItem('list', JSON.stringify(newArr));
      return ({
        dataSorting: newArr,
        [`${key}SortingButtonState`]: BUTTON_STATE.UP,
      });
    });
  }

  handleChangeInput = (value) => {
    const { data } = this.state;
    const filteredByQuotes = data.filter((item) => item.quote.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      dataSorting: filteredByQuotes,
    });
  }

  // eslint-disable-next-line react/sort-comp
  debounceChange = debounce((value) => this.handleChangeInput(value), 2000);

  handleChangeInputValue = (e) => {
    sessionStorage.setItem('inputValue', JSON.stringify(e.target.value));
    this.setState({
      inputValue: e.target.value,
    });
    this.debounceChange(e.target.value);
  }

  handleReset = () => {
    const { data } = this.state;
    sessionStorage.setItem('list', JSON.stringify(data));
    sessionStorage.setItem('inputValue', JSON.stringify(''));
    this.setState({
      dataSorting: data,
      nameSortingButtonState: BUTTON_STATE.DEFAULT,
      quoteSortingButtonState: BUTTON_STATE.DEFAULT,
      inputValue: '',
    });
  }

  getRandomQuote = () => {
    const { dataSorting } = this.state;
    const { history } = this.props;
    const randomNumber = getRandomInRange(dataSorting.length);
    const randomQuote = dataSorting.filter((item, index) => index === randomNumber);
    console.log(randomQuote[0].id);
    history.push({ pathname: `/quotes/${randomQuote[0].id}`, state: randomQuote[0] });
  }

  render() {
    const {
      dataSorting,
      nameSortingButtonState,
      quoteSortingButtonState,
      inputValue,
    } = this.state;
    return (
      <>
        <Title className="App-h1">Random Quotes</Title>
        <div className="App-container">
          <Search
            inputValue={inputValue}
            handleChangeInput={this.handleChangeInputValue}
            getRandomQuote={this.getRandomQuote}
          />
          <SortingQuotes
            data={dataSorting}
            handleSortList={this.handleSortList}
            handleReset={this.handleReset}
            nameSortingButtonState={nameSortingButtonState}
            quoteSortingButtonState={quoteSortingButtonState}
          />
          <RandomQuotesList
            inputValue={inputValue}
            dataSorting={dataSorting}
          />
        </div>
      </>
    );
  }
}

QuotesListContainer.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const ShowTheLocationWithRouter = withRouter(QuotesListContainer);
export default ShowTheLocationWithRouter;
