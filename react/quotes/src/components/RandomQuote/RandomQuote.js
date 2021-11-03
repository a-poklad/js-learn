import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function RandomQuote() {
  const location = useLocation();
  const { id, name, quote } = location.state;
  return (
    <>
      <Link to="/quotes">/Previous Page</Link>

      <div
        className="App-list-item App-list-item-center"
        id={id}
      >
        <h2>{name}</h2>
        <p>{quote}</p>
      </div>
    </>
  );
}

export default RandomQuote;
