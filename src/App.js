import React from 'react';
import { TweenLite } from 'gsap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import './styles.css';

const todoItems = [];

class App extends React.Component {
    constructor() {
        super();

        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;

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

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 2, {opacity: 1, y:100});
    }

    render() {
        return (
            <div ref={div => this.myElement = div} id="mainDiv" >
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
            </div>
        );
    }
}

export default App;
