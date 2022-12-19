import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const request = new Request('https://jsonplaceholder.typicode.com/users')
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({
        users: data,
        isLoading: false
      }))
      .catch(error => console.error(error));
  }


  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
