import react, { useState } from 'react'
import  reactDOM from "react";




const FormsApp = () => {
    
    const[name , set] = useState("")
    const[FullName , setname] = useState("")



const InputEvent =(event)=> {

        console.log(event.target.value);
        set(event.target.value)
}

const getname = ()=> {

    setname(name)

}
return(

// in input using react we must do onchange function
// because of controlled component
// in react form data is handled by react componet
//the alternative is uncontrolled component where data is handled 
// by the DOM itself
<>

    <div>
            <h1> Hello {FullName}</h1>
            <input type="text" placeHolder="enter your name" 
            id="name" onChange= {InputEvent} value={name} />

            <button onClick= {getname} > Submit</button>


    </div>
</>


);

}
export default FormsApp;
