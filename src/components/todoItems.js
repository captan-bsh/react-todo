import React, { Component } from "react";
import TodoItem from "./todoItem";
import { observer } from "mobx-react";
import todoStore from "../store/todoStore";

const TodoItems = observer(
  class TodoItems extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {
                todoStore.todos.map(todo => {
                  if(todoStore.displayType === 'all'){
                    return <TodoItem todo={todo} key={Math.random().toString()} />;
                  }
                  if(todoStore.displayType === 'completed'){
                    return todo.completed ? <TodoItem todo={todo} key={Math.random().toString()} /> : ''
                  }
                  if(todoStore.displayType === 'active'){
                    return todo.completed ? '' : <TodoItem todo={todo} key={Math.random().toString()} />
                  }
                  return true
                })
            }
          </ul>
        </section>
      );
    }
  }
);

export default TodoItems;
