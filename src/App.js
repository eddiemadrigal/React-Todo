import React from 'react';
import './styles.css';

const todoItems = [
  {
    id: 1,
    name: 'Clean Car', 
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems,
      name: ''
    };
  }

  toggleComplete = clickedTaskId => {
    this.state({
      todoItems: this.state.todoItems.map ( item => {
        if (item.id === clickedTaskId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      id: new Date(),
      name: taskName,
      completed: false
    };

    this.setState({
      todoItems: [...this.state.todoItems, newTask]
    })

  }

  render() {
    return (
      <div className="header">
        <h1>To Do List</h1>
      </div>
    )
  }

}

export default App;
