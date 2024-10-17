import style from "./app.module.css";
import Display from "./component/display";
 import Button from "./component/button";

function App() {
  

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
