import AppName from "../component/appName";
import TodoAdd from "../component/todoAdd";
import Todoitem from "../component/todoitem";

import "./App.css";
function App() {
  const Todolist = [
    {
      name: "buy milk",
      date: "04/10/23",
    },

    {
      name: "go to school",
      date: "04/10/23",
    },
    {
      name: "go to liberaray",
      date: "04/10/23",
    },
  ];
  return (
    <div>
      <center className="todo-container">
        <AppName></AppName>

        <TodoAdd></TodoAdd>

        <Todoitem todoitems={Todolist} />
      </center>
    </div>
  );
}

export default App;
