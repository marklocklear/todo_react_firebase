import React, { Component } from 'react';

class Task extends Component {
 	constructor(props) {
	  super(props);
	  this.state = { task: "blah" };
	  this.removeTask = this.removeTask.bind(this);
	}

	removeTask() {
  	this.props.removeTask(this.props.name);
	}

  render() {
    return (
      <li>
      	{this.props.name}
      	<button onClick={this.removeTask}>&times;</button>
      </li>
    );
  }
}

export default Task;