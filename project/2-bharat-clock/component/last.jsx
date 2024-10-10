function Last(){
  let time=new Date();
  return <div class="lead">
    This in current time and date : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
  </div>
}
export default Last;
