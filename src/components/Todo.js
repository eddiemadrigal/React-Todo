import React from 'react';

const Item = props => {
    return (
        <div
            onClick = {() => props.toggleCompleted(props.task.id) }
            className = {`item ${props.task.completed ? 'completed' : ''}`}
        >

            <p>{ props.task.name }</p>

        </div>
    );
};

export default Item;