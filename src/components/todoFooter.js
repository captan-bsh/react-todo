import React, { Component } from "react";
import { observer } from "mobx-react";
import Todostore from "../store/todoStore"

const Footer = observer(
  class Footer extends Component {

    onDesroyAllCompleted() {
      this.props.todos.destroyAllCompleted()
    }
    onDisplay(type) {
      this.props.todos.showTasks(type)
    }

    onActive(){
      return true
    }
    onCompleted(){
      return true
    }

    render() {
      const { todos } = this.props;
      var countCompleted = 0
      todos.todos.forEach(el => {
        if(el.completed === false){countCompleted++}
      });

      return (
        <footer className="footer">
          <span className="todo-count">
            {todos.todos.length > 0 && (
              <div>
                <strong>{countCompleted}</strong>
                <span>{(countCompleted) > 1 ? " items " : " item "}</span>
                <span>left</span>
              </div>
            )}
          </span>
          <ul className="filters">
            <li>
              <button className={Todostore.displayType === 'all' ? 'selected' : '' } onClick={ () => this.onDisplay('all')}>All</button>
            </li>
            <li>
              <button className={Todostore.displayType === 'active' ? 'selected' : '' } onClick={ () => this.onDisplay('active')}>Active</button>
            </li>
            <li>
              <button className={Todostore.displayType === 'completed' ? 'selected' : '' } onClick={ () => this.onDisplay('completed')}>Completed</button>
            </li>
          </ul>
          <button
            onClick={ () => this.onDesroyAllCompleted()}
            className="clear-completed"
          >
          {todos.todos.find(el=>{
            return el.completed
          }) && 'Clear completed'}
          </button>
        </footer>
      );
    }
  }
);

export default Footer;
