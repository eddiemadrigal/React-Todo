import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            { props.todoItems.map ( task => (
                <Todo 
                    key = { task.id }
                    task = { task }
                    toggleCompleted = { props.toggleCompleted }
                />
            ))}
            <button 
                className="clear-btn"
                onClick={ props.clearCompleted } 
            >Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;