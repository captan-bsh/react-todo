import { observable, decorate, action } from "mobx";

export default class TodoModel {
  store
  title
  completed
  id
  
  constructor(store, title, completed, id) {
    this.store = store;
    this.title = title;
    this.completed = completed;
    this.id = id;
  }

  toggle() {
    this.completed = !this.completed;
  }

  destroy() {
		this.store.todos.remove(this);
  }
  
}

decorate(TodoModel, {
  title: observable,
  completed: observable,
  toggle: action,
  destroy: action
});