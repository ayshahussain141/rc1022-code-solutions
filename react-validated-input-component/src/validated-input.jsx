import React from "react";

export default class ValidatedInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {password: '',
                  text: '',
                  };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange() {
    this.setState({ password: event.target.value});
  }

  newmessage(){
    if (this.state.password.length < 7) {
      this.state.text = 'Password must be 8 chracters';
      this.state.class ='fa-solid fa-xmark'
    }
    if (this.state.password.length > 7) {
      this.state.class = 'fa-solid fa-check'
      this.state.text = '';
    }
    if (this.state.password.length === 0) {
      this.state.text = 'A password is required'
      this.state.class = 'fa-solid fa-xmark'
    }
  }

  render() {
  const message = this.newmessage();
    console.log(this.state);
    return (<div class="container">
              <label>
                <div>
                Password
                </div>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </label>
              <i class={this.state.class}></i>
              <div>
              <span>{this.state.text}</span>
              </div>
            </div>
    );
  }
}
