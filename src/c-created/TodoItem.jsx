import React from 'react'
import { Link } from "react-router-dom"
import '../CSS/Add.css';

const TodoItem = ({ todo, onEditClick, onDeleteClick }) => {
    return (
        <div className='todo'>
        <li className='presentation-container7' key={todo.id}>
            <div className='todo-text'>{todo.text}</div>
            {" "}
            <div className='todo-text'>{todo.text}</div>
            {" "}
            <div className="presentation-container3">
            <Link to={'/Open'}><button>Open</button></Link>
            <button onClick={() => onEditClick(todo)}>Edit</button>
            <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </div>
        </li></div>
    )
}

export default TodoItem
