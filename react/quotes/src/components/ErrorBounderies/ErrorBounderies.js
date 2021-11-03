import React from 'react';
import PropTypes from 'prop-types';

class ErrorBounderies extends React.Component {
  static gerDerivedStateFromError(error) {
    return {
      error,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error: ', error);
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

ErrorBounderies.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBounderies;
