import React from "react";
import TodoList from "./todoList"

function Todoitem({todoitems}) {
  return (
    <div>
      
      {todoitems.map((item) => (
        <TodoList todoname={item.name} tododate={item.date}></TodoList>
      ))}
    </div>
  );
}

export default Todoitem;
