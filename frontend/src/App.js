import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './style.css';

class TodoList extends Component {
  state = {
    todos: [],
    rendView: false
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

  close = () => {
    this.setState({rendView:false});
  };

  view = () => {
    this.setState({rendView:true});
  };

  rendClose = () => {
    return (
      <main>
        
        <NavBar />

        <div className="container">
          {this.state.todos.map(i => (
          <div className="items" key={i.id}>
            <h2>{i.title}</h2>
            <button onClick={this.view} className="btn text-dark m-1">Показать</button>
            <button onClick={this.close} className="btn text-danger m-1">Скрыть</button>
          </div>
          ))}
        </div>
      </main>
    );
  }

  rendView = () => {
    return (
      <main>
        <NavBar />

        <div className="container">
          {this.state.todos.map(i => (
          <div className="items" key={i.id}>
            <h2>{i.title}</h2>
            <span className="text">{i.description}</span>
            <button onClick={this.view} className="btn text-dark m-1">Показать</button>
            <button onClick={this.close} className="btn text-danger m-1">Скрыть</button>
          </div>
          ))}
        </div>
      </main>
    );
  }


  render() {
    if (!this.state.rendView) {
      return this.rendClose();
    } else {
      return this.rendView();
    }
  }
}

export default TodoList;
