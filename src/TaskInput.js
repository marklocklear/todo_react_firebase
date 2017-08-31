import React, { Component } from 'react';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { taskName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    this.props.addTask(this.state.taskName);
    this.setState({ taskName: '' });
  }

  handleUpdate(event) {
    this.setState({ taskName: event.target.value });
  }

  render() {
    return (
      <div className="AddTask">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.taskName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
}

export default TaskInput;