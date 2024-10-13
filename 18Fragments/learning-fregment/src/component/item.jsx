import style from"./item.module.css"
function Item({fooditem}){ 
  return <li  className={ `${style["kg-item"]} `} >
 <span className= { style["kg-food"]}> {fooditem}</span>
</li>
}
  export default Item;
