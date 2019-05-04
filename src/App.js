import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [{
      id: 1,
      task: 'Buy groceries',
      completed: false
    },
    {
      id: 2,
      task: 'Attend business Meeting ',
      completed: false
    },
    {
      id: 3,
      task: 'Negotiate the sales deal',
      completed: false
    }
]};
  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
 };

export default App;
