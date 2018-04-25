import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './App';
import NavBar from './components/NavBar';
import ListTodo from './components/ListTodo';
import registerServiceWorker from './registerServiceWorker';
import './static/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Todo />,
  document.getElementById('root'));
registerServiceWorker();
