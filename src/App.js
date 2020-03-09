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

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter( todo => todo.completed === false)
    })

    // let todos = this.state.todoItems.filter( todo => !todo.completed);
    // console.log("My todos: ", todos);
    // this.setState({ todos });
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
          clearCompleted = { this.clearCompleted }
        />
      </div>
    );
  }

}

export default App;
