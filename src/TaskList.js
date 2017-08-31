import React, { Component } from 'react';
import Task from "./Task";
import TaskInput from "./TaskInput";
import base from "./base";

class TaskList extends Component {
	static propTypes = {
    tasks: React.PropTypes.array
  };

	constructor(props) {
	  super(props);
	  this.state = { tasks: this.props.tasks || [] };
	  this.addTask = this.addTask.bind(this);
	  this.removeTask = this.removeTask.bind(this);
	}

	componentWillMount(){
    this.ref = base.syncState('/taks', {
      context: this,
      state: 'tasks',
      asArray: true
    });
  }

	addTask(newName) {
	  this.setState({ tasks: [...this.state.tasks, newName] });
	}

	removeTask(removeName) {
	  const filteredTasks = this.state.tasks.filter(name => {
	    return name !== removeName;
	  });
	  this.setState({ tasks: filteredTasks });
	}

	renderTasks() {
	  return this.state.tasks.map(name => (
	    <Task
	    	key={name}
	    	name={name}
	    	removeTask={this.removeTask}
	    />
	  ));
	}
		render() {
	  return (
	    <div className="TaskList">
	    	<h3>TODO List</h3>
	      {this.renderTasks()}
	      <TaskInput addTask={this.addTask}/>
	    </div>
	  );
	}
}

export default TaskList;