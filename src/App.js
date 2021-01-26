import React , {useState}from 'react';
import SortingComponent from "./components/Sortingcomponent";
import Actions from "./components/Actions";
import './App.css';


function App() {

  const [state, setState]= useState([])
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function resetArray(){
    const array = [];
    for(let i=0;i<100;i++){
      array.push(getRandomArbitrary(5, 1000));
    };
    setState(array)
  }
  


  console.log(state)


  return (
    <div className="App">
      <button onClick={resetArray}>RESTART</button>
      <SortingComponent state={state}/>
    </div>
  );
}

export default App;
