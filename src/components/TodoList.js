import React from 'react';
import Todo from './Todo';
import { Button } from 'reactstrap';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props
                .todoItems
                .map(task => (<Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted}/>))}
            <Button className="clear-btn" onClick={props.clearCompleted}>Clear Completed Tasks</Button>
        </div>
    )
}

export default TodoList;