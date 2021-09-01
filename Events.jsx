import react, { useState } from 'react';
import './index.css'

const Events = () => {
    const color = "yellow"
    const [bg , setback] = useState(color);

 const changeme = () => {

     let newcolor = " red"
    setback(newcolor)

 }
 
 const doubleclick = () => {
        setback(color)
}


 return(
  <div 
        style={{backgroundColor: bg}}>
        <button onDoubleClick={doubleclick}  onClick={changeme}> click me</button>
                    
                    

 </div>



        )

}

export default Events;