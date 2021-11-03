import React from 'react';
import PropTypes from 'prop-types';
import RandomQuotesItem from '../RandomQuotesItem';

function RandomQuotesList(props) {
  const {
    dataSorting,
  } = props;
  return (
    <>
      <ul className="App-list">
        {
          dataSorting.map((item) => (
            <RandomQuotesItem key={item.id} itemQuote={item} />
          ))
        }
      </ul>
    </>
  );
}

RandomQuotesList.propTypes = {
  dataSorting: PropTypes.arrayOf(PropTypes.object),
};

RandomQuotesList.defaultProps = {
  dataSorting: [],
};

export default RandomQuotesList;
