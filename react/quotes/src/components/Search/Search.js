import React from 'react';
import {
  Button,
  Input,
} from 'antd';
import { InteractionOutlined, SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function Search(props) {
  const {
    handleChangeInput,
  } = props;
  return (
    <div className="App-search-wr">
      <label htmlFor="inputCreate">
        <Input
          name="create"
          size="large"
          prefix={<InteractionOutlined />}
          type="text"
          placeholder="Search"
          onChange={handleChangeInput}
        />
      </label>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        size="large"
        // onClick={handleReset}
      >
        Get random quote
      </Button>

    </div>
  );
}

Search.propTypes = {
  handleChangeInput: PropTypes.func,
};

Search.defaultProps = {
  handleChangeInput: () => {},
};

export default Search;
