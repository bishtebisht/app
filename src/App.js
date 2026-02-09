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


function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
