import React from 'react'
import { useParams,useLocation,useHistory } from 'react-router'
//use location hooks is used to find the current url location
// so if we go to console in object we have differnet key value pair
// so by pathname we get the current location of url
// if need cuurent location use location
// otherwise use history to check from whcih page i come or I go 
// const  UseParamsHook =(match) =>{
//     return (
//         <div>
//             <h1>user{match.params.name} page </h1>
            
//         </div>
//     )
// }
const  UseParamsHook =() =>{
    const {fname,lname} = useParams();
    const location= useLocation();
    const history =useHistory();
    
    return (
    <>
    <h1> user{fname} {lname} page </h1>
    <br />
    <h1>my current location is {location.pathname}</h1>
    {/* {location.pathname === `/user/fahad/zaman` ? (
        <button onClick={ ()=> alert("you are welcome")}>click me</button>

    ):null} */}

        {/* {location.pathname === `/user/fahad/zaman` ? (
        <button onClick={ ()=> history.goBack()}>click me</button>

    ):null} */}
     {location.pathname === `/user/fahad/zaman` ? (
        <button onClick={ ()=> history.push('/')}> go to about home page</button>

    ):null}

      </>  
    );    
        
}


export default UseParamsHook
