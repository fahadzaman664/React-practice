import React, { useState, useEffect } from 'react'

const UseEffectHook=()=> {

    const [Num , setNum] = useState(0);
    const [Nums , setNums] = useState(0);


    useEffect(() => { // use effect call directly if rendor  method called.
        // alert('i am clicked')
        document.title=`you cliked me ${Num}`
        
    // }, [Nums]) // here it will call when this state is called like when increment num by cliking button
}, )
    return (
        <div>
            
            <h1> {Num}</h1>
            <h1> {Nums}</h1>
            <button onClick={()=>{
                
                setNum(Num+1)}}>
                     count
                     </button>
                     <br />
                     <button onClick={()=>{
                
                setNums(Nums+1)}}>
                     count
                     </button>
        </div>
    )
}



export default UseEffectHook
