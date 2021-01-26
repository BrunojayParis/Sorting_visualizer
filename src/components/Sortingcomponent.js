import React from 'react';

const SortingComponent =({setState})=>{
    
    return(
        <div className="sorted_numbers">            
                {setState.map((value, idx) => (
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
