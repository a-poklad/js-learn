import React from 'react';
import PropTypes from 'prop-types';
import SortingQuotes from '../SortingQuotes';
import RandomQuotesItem from '../RandomQuotesItem';

function RandomQuotes(props) {
  const {
    data,
    handleSortListUp,
    handleSortListDown,
    handleReset,
  } = props;
  return (
    <>
      <SortingQuotes
        handleSortListUp={handleSortListUp}
        handleSortListDown={handleSortListDown}
        handleReset={handleReset}
      />
      <ul className="App-list">
        {
          data.map((item) => (
            <RandomQuotesItem key={item.id} itemQuote={item} />
          ))
        }
      </ul>
    </>
  );
}

RandomQuotes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleSortListUp: PropTypes.func,
  handleSortListDown: PropTypes.func,
  handleReset: PropTypes.func,
};

RandomQuotes.defaultProps = {
  data: [],
  handleSortListUp: () => {},
  handleSortListDown: () => {},
  handleReset: () => {},
};

export default RandomQuotes;
