import React, {Component} from 'react';

class Todos extends Component{
    render(){
        return this.props.todos.map((todo)=>(
            <li key={todo.id}>{todo.task}</li>
        ))}
    }


export default Todos; 