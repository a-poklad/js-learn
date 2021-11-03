import React from 'react';
import {
  Button,
  Input,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function Search(props) {
  const {
    handleChangeInput,
    inputValue,
    getRandomQuote,
  } = props;
  return (
    <div className="App-search-wr">
      <label htmlFor="inputCreate">
        <Input
          name="create"
          size="large"
          prefix={<SearchOutlined />}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </label>
      <Button
        type="primary"
        size="large"
        onClick={getRandomQuote}
      >
        Get random quote
      </Button>

    </div>
  );
}

Search.propTypes = {
  inputValue: PropTypes.string,
  handleChangeInput: PropTypes.func,
  getRandomQuote: PropTypes.func,
};

Search.defaultProps = {
  inputValue: '',
  handleChangeInput: () => {},
  getRandomQuote: () => {},
};

export default Search;
