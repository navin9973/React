function TodoList1() {
  let todoname = "buy milk";
  let tododate = "04/10/23";
  return (
    <div class="row kg">
      <div class="col ">{todoname}</div>
      <div class="col-md">{tododate}</div>
      <div class="col col-lg-2">
        <button type="button" class="btn btn-danger botton-container">
          delete
        </button>
      </div>
    </div>
  );
}
export default TodoList1;
