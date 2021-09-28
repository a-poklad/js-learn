import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';

function SortingQuotes(props) {
  const {
    handleSortListUp,
    handleSortListDown,
    handleReset,
  } = props;
  return (
    <div className="App-sort-btn-wr">
      <Button
        className="App-sort-btn"
        type="primary"
        icon={<SortAscendingOutlined />}
        size="large"
        onClick={handleSortListDown}
      >
        Sort by name
      </Button>
      <Button
        className="App-sort-btn"
        type="primary"
        icon={<SortDescendingOutlined />}
        size="large"
        onClick={handleSortListUp}
      >
        Sort by name
      </Button>
      <Button
        className="App-sort-btn"
        type="primary"
        icon={<UndoOutlined />}
        size="large"
        onClick={handleReset}
      >
        Reset filters
      </Button>
    </div>
  );
}

SortingQuotes.propTypes = {
  handleSortListUp: PropTypes.func,
  handleSortListDown: PropTypes.func,
  handleReset: PropTypes.func,
};

SortingQuotes.defaultProps = {
  handleSortListUp: () => {},
  handleSortListDown: () => {},
  handleReset: () => {},
};

export default SortingQuotes;
