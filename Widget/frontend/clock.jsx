import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = {time: new Date()};
  }

  tick(){
    const time = new Date();
    this.setState({time});
  }

  componentDidMount(){
    this.intervalID = setInterval(this.tick.bind(this), 1000);
  }

  render(){
    const {time} = this.state;
    return (
      <h1>{time.toString()}</h1>
    );
  }
}

export default Clock;
