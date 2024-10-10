function Hello(){
  let myName="navin";
  let detail= ()=>{
    return "i am a student";
  }
  return <p> hello my name is {myName}
.{detail()}
  </p>
}
export default Hello;