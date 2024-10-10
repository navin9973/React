import Item from "./item";
function FoodList(props){
  
  return <>
    <ul className="list-group">
        {props.f.map((items) => (
          
            <Item key={items} fooditem={items}></Item>
          
))}
      </ul>
  </>
}
export default FoodList;
