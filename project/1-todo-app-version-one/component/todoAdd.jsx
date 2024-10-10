function TodoAdd(){
  return  <div class="row kg">
  <div class="col">
    <input type="text" placeholder="enter your todo here" />
  </div>
  <div class="col-md-auto">
    <input type="date" />
  </div>
  <div class="col col-lg-2">
    <button type="button" class="btn btn-success botton-container">
      add
    </button>
  </div>
</div>
}

export default TodoAdd;