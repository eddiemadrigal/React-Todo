import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.css';

const todoItems = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems,
      name: ''
    };
  }

  toggleCompleted = clickedTaskId => {
    this.setState({
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

  clearTasks = () => {
    this.setState({
      todoItems: []
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTask = { this.addTask } />
        </div>
        <TodoList
          todoItems = { this.state.todoItems }
          toggleCompleted = { this.toggleCompleted }
        />
      </div>
    );
  }

}

export default App;
