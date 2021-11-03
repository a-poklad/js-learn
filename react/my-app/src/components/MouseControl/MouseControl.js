import React from 'react';

class MouseControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    }

  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return <div onMouseMove={this.handleMouseMove}>
      {this.props.render(this.state)}
    </div>
  }
}

export default MouseControl;
