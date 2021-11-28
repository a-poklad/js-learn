import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import BUTTON_STATE from '../../constans/constans';

const getIcon = (buttonState) => {
  if (buttonState === BUTTON_STATE.UP) {
    return <SortAscendingOutlined />;
  }
  if (buttonState === BUTTON_STATE.DOWN) {
    return <SortDescendingOutlined />;
  }
  return '';
};

function SortingQuotes(props) {
  const {
    handleSortList,
    handleReset,
    quoteSortingButtonState,
    nameSortingButtonState,
    setNameSortingButtonState,
    setQuoteSortingButtonState,
  } = props;
  return (
    <div className="App-sort-btn-wr">
      {}
      <Button
        className="App-sort-btn"
        type="primary"
        icon={getIcon(nameSortingButtonState)}
        size="large"
        onClick={() => handleSortList('name', nameSortingButtonState, setNameSortingButtonState)}
      >
        Sort by name
      </Button>
      <Button
        className="App-sort-btn"
        type="primary"
        icon={getIcon(quoteSortingButtonState)}
        size="large"
        onClick={() => handleSortList('quote', quoteSortingButtonState, setQuoteSortingButtonState)}
      >
        Sort by quote
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
  handleSortList: PropTypes.func,
  handleReset: PropTypes.func,
  setNameSortingButtonState: PropTypes.func,
  setQuoteSortingButtonState: PropTypes.func,
  quoteSortingButtonState: PropTypes.oneOfType({
    UP: PropTypes.string,
    DOWN: PropTypes.string,
    DEFAULT: PropTypes.string,
  }),
  nameSortingButtonState: PropTypes.oneOfType({
    UP: PropTypes.string,
    DOWN: PropTypes.string,
    DEFAULT: PropTypes.string,
  }),
};

SortingQuotes.defaultProps = {
  handleSortList: () => {},
  handleReset: () => {},
  setNameSortingButtonState: () => {},
  setQuoteSortingButtonState: () => {},
  quoteSortingButtonState: {
    UP: '',
    DOWN: '',
    DEFAULT: '',
  },
  nameSortingButtonState: {
    UP: '',
    DOWN: '',
    DEFAULT: '',
  },
};

export default SortingQuotes;
