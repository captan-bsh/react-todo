import { observable, decorate, action } from "mobx";
import TodoModel from "./todoModel";

class TodoStore {
  todos = [];
  lastID = 0;

  displayType = 'all'

  showTasks(type) {
    if (type === "all") {
      this.displayType = "all";
    }
    if (type === "completed") {
      this.displayType = "completed";
    }
    if (type === "active") {
      this.displayType = "active";
    }
    return true
  }

  addTodo(title) {
    let res = new TodoModel(this, title, false, this.lastID++);
    this.todos.push(res);
  }

  destroyAllCompleted() {
    this.todos = this.todos.filter(item => {
      return item.completed !== true;
    });
  }
}

decorate(TodoStore, {
  todos: observable,
  displayType: observable,
  addTodo: action
});

const Todostore = new TodoStore();
export default Todostore;
