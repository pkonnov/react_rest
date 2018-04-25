import React, { Component } from 'react';
import Todo from '../App';

class ListTodo extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      rendView: false,
      isOpen: props.defaultOpen
    }

  }

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

  render(){
    return (
      <div className="container">
        {this.state.todos.map((i, index) => (

          <div className="items" key={index}>
            <h3>{i.title}</h3>
            {this.state.isOpen && <span className="text">
              {i.description}
            </span>}
            <button className="btn m-1" onClick={this.clickClose}>
              {this.state.isOpen ? 'Скрыть' : 'Показать'}
            </button>
          </div>

        ))}
      </div>
    )
  }

  clickClose = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
  }

}

export default ListTodo;
