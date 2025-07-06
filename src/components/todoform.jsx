import React, { Component } from 'react';
import './todoform.css';

class TodoForm extends Component {
  state = {
    task: ''
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task.trim()) {
      this.props.addTask(this.state.task);
      this.setState({ task: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="输入新任务..."
        />
        <button type="submit" className="submit-btn">提交</button>
      </form>
    );
  }
}

export default TodoForm;