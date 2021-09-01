// import react  from 'react';
// import { useState } from 'react';


// // here if we simple take count variable and then do incremention
// // it will notb work
// // se we have to change the state 
// // use state return array with two items
// // first one is called state object/current data and the second is updated function





// const Hooks = () => {
//     const state = useState();

//     const [count , setCount] = useState(0); // 0 is initial value 
//     // and setcount is updatedfucntion it will have value of updatedcount
//     // it cur value is 0 and update is 1
//     // then 1 become nect current value of count and 2 become updatedvalue of setcount

//     const IncNum =() => {

//         setCount(count + 1); // so we do that for counting
    
    
//     }
//         return(
// < >
//             <h1 > {count}</h1>
//             <button onClick={IncNum}> click me </button> 

// </>
//         )

// };

// export default Hooks;


// react js challenge no 6 (hhok challenge get time with button/refreshing

// import react, { useState } from 'react';



// const Challenge = () =>{
//     const state = useState();

//     const date = new Date().toLocaleTimeString();
//      const [count , setime] = useState(date)


//     const gettime = ()=> {
//         let newtime = new Date().toLocaleTimeString();
//         setime(newtime);
        
//     }


//     return (
//     <>
//             <h1> {count} </h1>
//             <button onClick={gettime}>add time </button>

//     </>
//     )
// };

// export default Challenge;\


// react challenege making a digital clock

// import react, { useState } from 'react';



// const Challenge = () =>{

//     let curtime = new Date().toLocaleTimeString();

//     const [ctime , settime] = useState(curtime)

//     const gettime = ()=> {
//         let newtime = new Date().toLocaleTimeString();
//         settime(newtime);

//     }
//         setInterval(gettime, 1000);

//     return (
//     <>
//         <h1> {ctime}  </h1>
//     </>
//     )
// };

// export default Challenge;