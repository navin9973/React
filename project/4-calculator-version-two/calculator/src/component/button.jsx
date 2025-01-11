import style from "./button.module.css";
function Button() {
  let arr = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id={style.buttonContainer}>
        {arr.map((ele) => (
          <button className={style.button}>{ele}</button>
        ))}
      </div>
    </>
  );
}
export default Button;
