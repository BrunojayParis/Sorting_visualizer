import React from 'react';





const SortingComponent =({bars, setBars})=>{
    
    bars = {
        array:[],
    }


    function resetArray(){
        const array = [];
        for(let i=0; i<100; i++){
            array.push(randomInteger(5, 1000));    
        }
        return array;

    }
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

      setBars = resetArray();
      console.log(setBars)


    return(
        <div className="sorted_numbers">            
                {setBars.map((value, idx) => (
                    <div
                    className= "number_bar" 
                    key = {idx} 
                    style = {{height: `${value * 70 / 1000}vh`}}>
                        {value}
                    </div>
                ))} 
                           
        </div>
    


    )

}

export default SortingComponent;
