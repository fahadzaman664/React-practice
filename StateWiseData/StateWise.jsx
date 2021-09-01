
import React , {useEffect} from 'react'

const StateWise = ()=> {


    const getCovidData=async()=>{

           const res= await fetch('http://api.covid19pakistan.org/data.json')
           const actualData =res.json

    }


useEffect(() => {
    
    getCovidData();
    
}, [])

    return (
        <>
            <h1>hello Fahad</h1>
            
        
        </>
    )
}

export default StateWise
