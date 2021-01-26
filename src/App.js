import React , {useState}from 'react';
import SortingComponent from "./components/Sortingcomponent";
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
  function quickSort(){
    const array = state;
    const sortedArray = array.slice().sort((a,b)=>a-b)
    setState(sortedArray)

  }


  return (
    <div className="App">
      <SortingComponent state={state}/>
      <button onClick= {resetArray}>RESTART</button>
      <button onClick= {quickSort}>quick Sort</button>
      
    </div>
  );
}

export default App;
