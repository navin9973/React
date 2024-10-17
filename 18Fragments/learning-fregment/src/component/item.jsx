import style from"./item.module.css"
function Item({fooditem}){ 
  const buttonClick=(event)=>{
    console.log(event);
    console.log(`${fooditem} item is buy`);

  };
  return <li  className={ `${style["kg-item"]} list-group-item `} >
 <span className= { style["kg-food"]}> {fooditem}</span>
 <button type="button" className={`btn btn-primary ${style.b}`}onClick={(event) => buttonClick(event)}>Buy</button>
 
</li>
}
  export default Item;
