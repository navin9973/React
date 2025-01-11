import Item from "./item";
import { useState } from "react";
function FoodList(props) {
  const buttonClick = (event, items) => {
    // console.log(event);
    // console.log(`${items} item is buy`);
    let newItem = [...activeItem, items];
    
    SetActiveItem(newItem);
  };
  let [activeItem, SetActiveItem] = useState([]);

  return (
    <>
      <ul className="list-group">
        {props.f.map((items) => (
          <Item
            key={items}
            fooditem={items}
            bought={activeItem.includes(items)}
            handlebyButton={(e) => buttonClick(e, items)}
          ></Item>
        ))}
      </ul>
    </>
  );
}
export default FoodList;
