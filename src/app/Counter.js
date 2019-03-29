import React, {Component} from 'react';
import '../style/Counter.css'

class Counter extends Component {
    state = {
      count: 0
    };
    handleClick = () => {
        this.setState((prevState, { count }) => ({
          count: prevState.count + 1
        }));
      };
    render() {
      return <button className="CounterBtn" onClick={this.handleClick}>{this.state.count}</button>;
    }
  }

  export default Counter;