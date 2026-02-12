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

// const Person = ()=>{
//   return(
//     <>
//       <h2>This is a functional component</h2>
//       <h2>Name: Bhoomi</h2>
//     </>
//   )
// }
// const App = ()=>{
//   return(
//     <div className="App">
//       <h1>Welcome to React</h1>
//       <Person/>
//     </div>
//   )
// }

// export default App;



//props
// const Person = (props)=>{
//   return(
//     <>
//       <h2>This is a functional component</h2>
//       <h2>Name: {props.name}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }
// const App = ()=>{
//   return(
//     <div className="App">
//       <h1>Welcome to React</h1>
//       <Person name={"Bhoomi"} age={19} />
//       <Person name="Bhoomi" age={19} />
//       <Person name={"John"} age={30} />
//     </div>
//   )
// }

// export default App;

import { useState,useEffect} from 'react';

const App = ()=>{
  const [count, setCount] = useState(0);
  //never mutate the state manually, always use the setState function to update the state

  // useEffect(()=>{
  //   setCount(50);
  // },[]); 
  //indipendency array
  // if we want to run the useEffect only once when the component mounts, we can pass an empty array as the second argument to useEffect
 
  useEffect(()=>{
    alert("Count has been updated to: "+ count);
  },[count]); 
  //dependency array
  // if we want to run the useEffect every time the count state changes, we can pass the count state as a dependency in the array

  return(
    <div className="App">
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;