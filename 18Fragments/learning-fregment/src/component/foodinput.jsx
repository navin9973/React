import style from "./foodinput.module.css";

const FoodInput=()=>{
const handleInput=(event)=>{
  console.log(event.target.value);
}
  return <> 
  <input type="text" placeholder="enter your food here!!" className={style.foodinput} onChange={handleInput} />
  </>
}

export default FoodInput;

