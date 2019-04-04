import React, { Component } from "react";
import { observer } from "mobx-react";

const TodoItem = observer(
  class TodoItem extends Component {

    onToggle() {
      this.props.todo.toggle();
    }
    
    onDestroy(){
      this.props.todo.destroy()
    }

    render() {
      const { todo } = this.props;
      let checked = todo.completed ? "checked" : ''
      let completed = todo.completed ? 'completed' : ''

      return (
        <li className={completed}>
          <div className="view">
            <input
              onChange={() => this.onToggle()}
              type="checkbox"
              className="toggle"
              value="on"
              checked={checked}
            />
            <label>{todo.title}</label>
            <button className="destroy" onClick={()=> this.onDestroy()} />
          </div>
        </li>
      );
    }
  }
);

export default TodoItem;
