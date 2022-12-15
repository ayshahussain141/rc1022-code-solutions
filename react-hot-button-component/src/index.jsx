import React from 'react';
import ReactDOM from 'react-dom/client';
import add from './hot-button';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0,
                  name: ''};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({
      counter:this.state.counter + 1
    }));
  }
  render() {
   add(this.state)
      return <button class={this.state.name} onClick={this.handleClick}>Hot Button</button>;
    }

}

const element = <CustomButton />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
