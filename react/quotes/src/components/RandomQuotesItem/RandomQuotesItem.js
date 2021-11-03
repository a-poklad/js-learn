import React from 'react';
import PropTypes from 'prop-types';

function RandomQuotesItem(props) {
  const {
    itemQuote,
  } = props;
  return (
    <li
      className="App-list-item"
      id={itemQuote.id}
    >
      <h2>{itemQuote.name}</h2>
      <p>{itemQuote.quote}</p>
    </li>
  );
}

RandomQuotesItem.propTypes = {
  itemQuote: PropTypes.oneOfType({
    id: PropTypes.number,
    name: PropTypes.string,
    quote: PropTypes.string,
  }),
};

RandomQuotesItem.defaultProps = {
  itemQuote: {
    id: 0,
    name: '',
    quote: '',
  },
};

export default RandomQuotesItem;
