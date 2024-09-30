import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    // Any setup like API calls can be done here, though not necessary for this example
    console.log('Counter component has been mounted');
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  decrement(){
    this.setState(prevState =>({
        count:prevState.count-1,
    }))
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default Counter;
