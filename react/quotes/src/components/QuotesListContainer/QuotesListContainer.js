import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { withRouter, useHistory } from 'react-router-dom';
import RandomQuotesList from '../RandomQuotesList';
import Search from '../Search';
import BUTTON_STATE from '../../constans';
import SortingQuotes from '../SortingQuotes';
import getRandomInRange from '../../utils/getRandomInRange';
import debounce from '../../utils/debounce';

const { Title } = Typography;

const QuotesListContainer = () => {
  const [data, setData] = useState(() => JSON.parse(sessionStorage.getItem('list')) || []);
  const [dataSorting, setDataSorting] = useState([]);
  const [nameSortingButtonState, setNameSortingButtonState] = useState(BUTTON_STATE.DEFAULT);
  const [quoteSortingButtonState, setQuoteSortingButtonState] = useState(BUTTON_STATE.DEFAULT);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleChangeInput = (value) => {
    const filteredByQuotes = data.filter((item) => item.quote.toLowerCase().includes(value.toLowerCase()) || item.name.toLowerCase().includes(value.toLowerCase()));
    setDataSorting(filteredByQuotes);
  };

  useEffect(() => {
    const inputValueStorage = JSON.parse(sessionStorage.getItem('inputValue'));
    if (sessionStorage.getItem('list') && inputValueStorage) {
      setInputValue(inputValueStorage);
      handleChangeInput(inputValueStorage);
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
          setData(resData);
          setDataSorting(resData);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  const handleSortList = (key, buttonState, setButtonState) => {
    const newArr = [...data];
    setButtonState(BUTTON_STATE.DEFAULT);

    if (buttonState === BUTTON_STATE.DEFAULT) {
      newArr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setDataSorting(newArr);
      setButtonState(BUTTON_STATE.UP);
      return;
    }

    if (buttonState === BUTTON_STATE.UP) {
      newArr.sort((a, b) => (b[key] > a[key] ? 1 : -1));
      setDataSorting(newArr);
      setButtonState(BUTTON_STATE.DOWN);
      return;
    }

    newArr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    sessionStorage.setItem('list', JSON.stringify(newArr));
    setDataSorting(newArr);
    setButtonState(BUTTON_STATE.UP);
  };

  const debounceChange = debounce((value) => handleChangeInput(value), 2000);

  const handleChangeInputValue = (e) => {
    sessionStorage.setItem('inputValue', JSON.stringify(e.target.value));
    setInputValue(e.target.value);
    debounceChange(e.target.value);
  };

  const handleReset = () => {
    sessionStorage.setItem('list', JSON.stringify(data));
    sessionStorage.setItem('inputValue', JSON.stringify(''));
    setDataSorting(data);
    setNameSortingButtonState(BUTTON_STATE.DEFAULT);
    setQuoteSortingButtonState(BUTTON_STATE.DEFAULT);
    setInputValue('');
  };

  const getRandomQuote = () => {
    const randomNumber = getRandomInRange(dataSorting.length - 1);
    const randomQuote = dataSorting.filter((item, index) => index === randomNumber);
    history.push({ pathname: `/quotes/${randomQuote[0].id}`, state: randomQuote[0] });
  };

  return (
    <>
      <Title className="App-h1">Random Quotes</Title>
      <div className="App-container">
        <Search
          inputValue={inputValue}
          handleChangeInput={handleChangeInputValue}
          getRandomQuote={getRandomQuote}
        />
        <SortingQuotes
          data={dataSorting}
          handleSortList={handleSortList}
          handleReset={handleReset}
          nameSortingButtonState={nameSortingButtonState}
          quoteSortingButtonState={quoteSortingButtonState}
          setNameSortingButtonState={setNameSortingButtonState}
          setQuoteSortingButtonState={setQuoteSortingButtonState}
        />
        <RandomQuotesList
          inputValue={inputValue}
          dataSorting={dataSorting}
        />
      </div>
    </>
  );
};

const ShowTheLocationWithRouter = withRouter(QuotesListContainer);
export default ShowTheLocationWithRouter;
