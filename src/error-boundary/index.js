import React from 'react';

import "./styles.css";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    // You can also log the error to an error reporting service
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          <div className="error__title">
            Something went wrong! Please refresh the page.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

