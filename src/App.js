import './App.css';

// const App=  ()=> {
//   const name="bhoomi";
//   const isname=false;
//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       <h1>Hello, {isname ? name : "Guest"}!</h1>

//     </div>
//   );
// }

//COMPONENTS

const Person = ()=>{
  return(
    <>
      <h2>This is a functional component</h2>
      <h2>Name: Bhoomi</h2>
    </>
  )
}
const App = ()=>{
  return(
    <div className="App">
      <h1>Welcome to React</h1>
      <Person/>
    </div>
  )
}

export default App;
