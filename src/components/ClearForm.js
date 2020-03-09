import React from 'react';

class ClearForm extends React.Component {

    constructor() {
        super();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.clearTasks();
    }

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <button>Clear Form</button>
            </form>
        )
    }

}

export default ClearForm;