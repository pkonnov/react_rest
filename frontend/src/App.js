import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './style.css';

class TodoList extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
    <main>

      <NavBar />

      <div className="container">
        {this.state.todos.map(item => (
        <div className="items" key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.description}</span>
        </div>
        ))}
      </div>
    </main>
    );
  }
}

export default TodoList;
