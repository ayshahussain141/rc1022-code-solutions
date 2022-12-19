import React from "react";

export default class StopWatch extends React.Component {
  constructor(prop) {
      super(prop);
      this.state = {
        isOn: false,
        count: 0
      };
    this.timer = this.timer.bind(this);
    this.end = this.end.bind(this);
    this.clear = this.clear.bind(this);
  }

  timer(){
    this.setState({isOn : true });
    this.time = setInterval(() => this.setState({count: this.state.count + 1}), 1000)
    console.log(this.state)
  }

  end(){
    this.setState({ isOn: false });
    clearInterval(this.time);
  }

  clear(){
    if(this.state.isOn !== true){
      this.setState({count: 0})
}
  }

  render() {
    const toggle = this.state.isOn ?'fa fa-pause' : 'fa fa-play';
    const pause = this.state.isOn ? this.end : this.timer;
    console.log(this.state.count)
    return (
    <div class="container">
        <div class='circle' onClick={this.clear}></div>
        <span>{this.state.count}</span>
        <i class={toggle} onClick={pause}></i>
    </div>
    )
  }
}
