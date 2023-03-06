import React from 'react'
import PropTypes from 'prop-types'
import '../CSS/presentation.css'
import Add from '../c-created/Add'
import { Link } from 'react-router-dom'
// import AddTodoForm from '../add/AddTodoForm'
// import TodoItem from '../add/TodoItem'


const Presentation = (props, { todo, onEditClick, onDeleteClick } ) => {
  return (
    <div className="presentation-container">
      <div className="presentation-container1">
        <div className="presentation-container2">
          <button className="presentation-button button">{props.button}</button>
        </div>
        <div className="presentation-container3">
          <div className="presentation-container4">
            <Add></Add>
            {/* <button className="presentation-button1 button">  
              {props.button1}
            </button> */}
          </div>
          
          {/* <div className="presentation-container5">
            <Add></Add> 
            <TodoItem></TodoItem>
          </div> */}
        </div>
      </div>
    </div>
  )
}

Presentation.defaultProps = {
  button: 'My Presentation',
  button1: '+ New presentation',
}

Presentation.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Presentation
