import React, { Component } from 'react';
import TodoForm from './todoform';
import TodoItem from './todoitem';
import './todolist.css';

class TodoList extends Component {
  state = {
    tasks: ['吃饭', '睡觉', '早起', '打游戏'],
    nextId: 5
  };

  addTask = (task) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
      nextId: prevState.nextId + 1
    }));
  };

  deleteTask = (index) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter((_, i) => i !== index)
    }));
  };

  editTask = (index, newTask) => {
    this.setState(prevState => {
      const newTasks = [...prevState.tasks];
      newTasks[index] = newTask;
      return { tasks: newTasks };
    });
  };

  render() {
    return (
      <div className="todo-list-container">
        <h1>Todo List</h1>
        <TodoForm addTask={this.addTask} />
        <div className="tasks-list">
          {this.state.tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              onDelete={this.deleteTask}
              onEdit={this.editTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;