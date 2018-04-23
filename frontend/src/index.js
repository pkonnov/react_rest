import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
