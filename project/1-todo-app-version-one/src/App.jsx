import AppName from "../component/appName";
import TodoAdd from "../component/todoAdd";
import TodoList1 from "../component/TodoList1";
import TodoList2 from "../component/TodoList2";
import "./App.css"
function App() {
  return (
    <div>
      <center className="todo-container">
       <AppName></AppName>
        
         <TodoAdd></TodoAdd>
         
         <TodoList1></TodoList1>
         <TodoList2></TodoList2>
      
       
      </center>
    </div>
  );
}

export default App;
