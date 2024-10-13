
function TodoList({todoname,tododate}){
 
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
export default TodoList;
