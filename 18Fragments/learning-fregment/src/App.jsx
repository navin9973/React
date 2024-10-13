import React from "react";
import Error from"./component/errorMessage";
import FoodList from "./component/foodList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let arr = ["orange", "rice", "chicken", "milk", "egg", "banana", "protin"];
  // let arr=[];
  return (
    <>
      <h1>Healthy food</h1>
     <Error f={arr}></Error>
    <FoodList f={arr}></FoodList>
    </>
  );
}

export default App;
