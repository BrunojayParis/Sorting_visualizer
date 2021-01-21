import React , {useState}from 'react';
import SortingComponent from "./components/Sortingcomponent";
import Actions from "./components/Actions";
import './App.css';



function App() {
  const [bars, setBars]= useState([])

  return (
    <div className="App">
      <SortingComponent bars={bars} setBars={setBars}/>
      <Actions setBars={setBars} />
      
     
    </div>
  );
}

export default App;
