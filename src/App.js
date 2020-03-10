import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
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
            todoItems: this
                .state
                .todoItems
                .map(item => {
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
            todoItems: [
                ...this.state.todoItems,
                newTask
            ]
        })
    }

    clearCompleted = e => {
        e.preventDefault();
        this.setState({
            todoItems: this
                .state
                .todoItems
                .filter(todo => todo.completed === false)
        })
    }

    render() {
        return (
            <Container className="mt-4">
                <Row>
                    <Col
                        sm="12"
                        md={{
                        size: 6,
                        offset: 3
                    }}>
                        <Card>
                            <CardBody>
                                <div>
                                    <h1>To Do List</h1>
                                    <TodoForm addTask={this.addTask}/>
                                </div>
                                <TodoList
                                    todoItems={this.state.todoItems}
                                    toggleCompleted={this.toggleCompleted}
                                    clearCompleted={this.clearCompleted}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
