import React from "react";
import Error from "./component/errorMessage";
import FoodList from "./component/foodList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/container";
import FoodInput from "./component/foodinput";
import { useState } from "react";
function App() {
  // let arr = ["orange", "rice", "chicken", "milk", "egg", "banana", "protin"];
  // let arr2 = ["pizza", "burgur", "coco", "sofdrink"];
  // let arr=[];

let[arr,setarr]=useState([]) 
  

  const handleInput = (event) => {
    if(event.key==="Enter"){
      let newfood=event.target.value;
      event.target.value="";
      let newArr=[...arr,newfood];
      setarr(newArr);
      
    }
  
  };

  return (
    <>
      <Container>
        <h1>Healthy food</h1>
        <FoodInput handleonKey={handleInput}></FoodInput>
        
        <Error f={arr}></Error>
        <FoodList f={arr}></FoodList>
      </Container>
      {/* <Container>
        <h1>Bad food</h1>
        <Error f={arr2}></Error>
        <FoodList f={arr2}></FoodList>
      </Container> */}
    </>
  );
}

export default App;
