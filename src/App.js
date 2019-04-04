import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoEntry from "./components/todoEntry"
import TodoItems from "./components/todoItems"
import Footer from "./components/todoFooter"
import todoStore from "./store/todoStore";
import "./App.css";

const App = observer(
  class App extends Component {
    render() {
      return (
        <div id="todoapp" className="todoapp">
          <TodoEntry />
          <TodoItems /> 
          <Footer todos={todoStore} />         
        </div>
      );
    }
  }
);

export default App;
