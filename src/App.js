import React , {useState}from 'react';
import SortingComponent from "./components/Sortingcomponent";
import Actions from "./components/Actions";
import './App.css';



function App() {
  const [state, setState]= useState([])
  const array = [];
  for(let i=0; i<100; i++){
      array.push(randomInteger(5, 1000));    
    }
    setState(array);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  return (
    <div className="App">
      <SortingComponent state={state} setState={setState}/>
      <Actions setState={setState} state={state} />
      

    </div>
  );
}

export default App;
