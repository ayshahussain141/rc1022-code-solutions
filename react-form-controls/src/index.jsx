import React from "react";
import  ReactDOM  from "react-dom";

class RegistrationForm extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {username: '',
                  password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
handleUsernameChange () {
  this.setState({ username: event.target.value });
}

handlePasswordChange () {
  this.setState({ password: event.target.value });
}

handleSubmit() {
  console.log(this.state);
  event.preventDefault();
}

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        UserName
      <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
      </label>
      <label>
        Password
      <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
      </label>
      <button>Signup</button>
    </form>
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
