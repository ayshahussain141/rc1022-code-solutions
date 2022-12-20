import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
    .then(res => res.json())
    .then(data => this.setState({
        todos: data,
      }))
      .catch(error => console.error(error));
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */

  }

  addTodo(newTodo) {

    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    .then(res=> res.json())
    .then( data => {
      const todosCopy = [...this.state.todos];
      todosCopy.push(data);
      this.setState({todos: todosCopy});
    })
  }

  toggleCompleted(todoId) {
    const toggleObject = this.state.todos.find(todo => todo.todoId === todoId);
    const toggleIndex = this.state.todos.indexOf(toggleObject);
    const status = { isCompleted: !toggleObject.isCompleted};

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(status)
    })

    .then(res => res.json())
    .then(data=> {
      const copy = [...this.state.todos];
      copy[toggleIndex] = data;
      this.setState({
        todos: copy
      })
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
