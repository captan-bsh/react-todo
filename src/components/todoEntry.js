import React, { Component } from "react";
import todoStore from "../store/todoStore";

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleKeydown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    if (this.state.value === '') {
        return;
      }
    event.preventDefault();
    todoStore.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <header className="header">
        <h1 className="pageTitle">{`To Do List`}</h1>
        <input
          value={this.state.value}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
          onKeyDown={event => this.handleKeydown(event)}
          type="text"
          className="new-todo"
          placeholder="What need to be down?"
        />
      </header>
    );
  }
}

export default TodoEntry;
