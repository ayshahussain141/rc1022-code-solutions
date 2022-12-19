import React from "react";

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isActive: false}
    this.Click = this.Click.bind(this);
  }

  Click(){
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const buttonText = this.state.isActive ? 'on' : 'off';
    if(this.state.isActive){
      return (
        <div onClick={this.Click}>
          <button class="backTwo"></button>
          <button class="sliderTwo"/>
          <span>{buttonText}</span>
        </div>
      )
    }else {
      return (
        <div onClick={this.Click}>
          <button class="back" ></button>
          <button class="slider" />
          <span>{buttonText}</span>
        </div>
      )
    }
  }
}
