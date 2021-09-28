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
  itemQuote: PropTypes.objectOf(PropTypes.object),
};

RandomQuotesItem.defaultProps = {
  itemQuote: {},
};

export default RandomQuotesItem;
