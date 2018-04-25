import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ListTodo from './components/ListTodo';
import './style.css';

class Todo extends Component {

  render() {
  //
    return (
      <div>
        
          <NavBar />
          <ListTodo />

      </div>
    );
  }

}

export default Todo;
