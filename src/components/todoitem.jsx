import React, { Component } from 'react';
import './todoitem.css';

class TodoItem extends Component {
  state = {
    isEditing: false,
    editedTask: this.props.task
  };

  handleDelete = () => {
    this.props.onDelete(this.props.index);
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleChange = (e) => {
    this.setState({ editedTask: e.target.value });
  };

  handleSave = () => {
    this.props.onEdit(this.props.index, this.state.editedTask);
    this.setState({ isEditing: false });
  };

  render() {
    const { task } = this.props;
    const { isEditing, editedTask } = this.state;

    return (
      <div className="todo-item">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTask}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSave} className="save-btn">保存</button>
          </div>
        ) : (
          <div className="task-content">
            <span>{task}</span>
            <div className="task-actions">
              <button onClick={this.handleEdit} className="edit-btn">编辑</button>
              <button onClick={this.handleDelete} className="delete-btn">删除</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TodoItem;