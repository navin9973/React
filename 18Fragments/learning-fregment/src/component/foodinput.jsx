import style from "./foodinput.module.css";

const FoodInput=({handleonKey})=>{
  

  return <> 
  <input type="text" placeholder="enter your food here!!" className={style.foodinput} onKeyDown={handleonKey} />
  </>
}

export default FoodInput;

