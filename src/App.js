import React , {useState}from 'react';
import SortingComponent from "./components/Sortingcomponent";
import {getMergeSortAnimations} from "./components/Sortingalgorithms.js"
import './App.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;


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
    setState(array); 
  }
  function quickSort(){
    const array = state;
    const sortedArray = array.slice().sort((a,b)=>a-b);
    setState(sortedArray);
  }
  function mergeSort(){
    const array = state;
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number_bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "black";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newValue] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newValue * 70 / 1000}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  
  return (
    <div className="App">
      <SortingComponent state={state}/>
      <button onClick= {resetArray}>RESTART</button>
      <button onClick= {quickSort}>quick Sort</button>
      <button onClick={mergeSort}>Merge sort</button>
      
    </div>
  );
}

export default App;
