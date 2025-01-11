import style from "./app.module.css";
import Display from "./component/display";
 import Button from "./component/button";
import { useState } from "react";

function App() {
  let [arr,setarr()]=useState([]);

  return (
    <>
   <div className={style.calculator}>
    <Display></Display>
    <Button></Button>
   </div>
    </>
  )
}

export default App
