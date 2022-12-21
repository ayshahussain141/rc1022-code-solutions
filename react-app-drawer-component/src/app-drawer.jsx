import React from "react";

export default class AppDrawer extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
    this.Click = this.Click.bind(this);
  }

  Click() {
   this.setState({name: !this.state.name});
  }

  render(){
    const buttonText = this.state.name ? 'hidden' : 'view';
    const button = this.state.name ? 'view' : 'hidden';
  return (
  <div class="container">
      <div className="row">
      <i className = {`fa-solid fa-bars ${button}`} onClick={this.Click}></i>
    </div>
      <div className={`row ${buttonText}`}>
      <div className={`overlay ${buttonText}`} onClick={this.Click}></div>
      <div class='popup'>
        <a onClick={this.Click}><h1>Menu</h1></a>
        <a onClick={this.Click}><h3>About</h3></a>
        <a onClick={this.Click}><h3>Get Started</h3></a>
        <a onClick={this.Click}><h3>Sign In</h3></a>
      </div>
    </div>
  </div>
  )
 }
}
