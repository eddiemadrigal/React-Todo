import React from 'react';
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input
} from 'reactstrap';
import './Todo.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this
            .props
            .addTask(this.state.task);
        this.setState({task: ''});
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Row>
                        <Col md={10}>
                            <Input
                                type="text"
                                name="task"
                                value={this.state.task}
                                onChange={this.handleChanges}/>
                        </Col>
                        <Col md={2}>
                            <Button color="success">Add</Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        )
    }
}

export default TodoForm;