import style from "./item.module.css";
function Item({ fooditem,bought, handlebyButton }) {
  return (
    <li className={`${style["kg-item"]} list-group-item ${bought&&"active"}`}>
      <span className={style["kg-food"]}> {fooditem}</span>
      <button
        type="button"
        className={`btn btn-primary ${style.b}`}
        onClick={handlebyButton }
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
