function TodoList2() {
  let todoname = "go to school";
  let tododate = "04/10/23";
  return (
    <div class="row kg">
      <div class="col">{todoname}</div>
      <div class="col-md">{tododate}</div>
      <div class="col col-lg-2">
        <button type="button" class="btn btn-danger botton-container">
          delete
        </button>
      </div>
    </div>
  );
}
export default TodoList2;