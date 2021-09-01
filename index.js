import React from "react"; // use to write html tags// and using babel brwoser noe understand modern js


import ReactDOM from "react-dom"; // use to work with dom// and same to babel
import App from "./App";


import "./index.css" // for css add file of your css

// render only take single element/node
// ReactDOM.render(
//     // if want to use multiple elemnt in render
//     // take div tag
//     // in react v16 its possible for render
//     // to return an array of elemnsts
//     [ <
//         div >

//         <
//         h1 > hello world to all < /h1>  <
//         p > Plz like and share < /p> 
//         <div >
//     ],
//     document.getElementById('root')

// );

// react Fragemnt
//to decrese div we use raect fragement

// ReactDOM.render(
//     // if want to use multiple elemnt in render
//     // take div tag
//     // in react v16 its possible for render
//     // to return an array of elemnsts
//      <
//         React.Fragment >

//         <
//         h1 > hello world to all < /h1>  <
//         p > List of five best series< /p> 

//         <ol  id= "list">
//             <li> vikings</li>
//             <li> hiest</li>
//             <li> pbreak</li>
//             <li> vikings</li>
//             <li> vikings</li>

//         </ol>


//         </React.Fragment >
//     ,
//     document.getElementById('root')

// );


// React Expression

// const myname = "fahad"
// const add = 2+4;

// ReactDOM.render(

//     <>
//         <h1> my name is{myname}</h1>
//         <p> add is {2+3}</p>
//         <p>{add}</p>

//     </> ,
//     document.getElementById('root')


// );
// Templete Litterals
// (`  `)

// const myname = "fahad"
// const add = 2+4;

// ReactDOM.render(

//     <>
//         <h1> {`my name is ${myname} and addition is  ${add}`}</h1>
//         <p> add is {2+3}</p>
//         <p>{add}</p>

//     </> ,
//     document.getElementById('root')


// );


// react challenge 2

// const date =  new Date().toLocaleDateString();
// const time =  new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//         <p> my name is fahad</p>
//         <p> {` the current date is ${date} Aug`}</p>
//         <p> {` the current tiem is ${time} `}</p>


//     </>,
//     document.getElementById('root')

// );

// jsx atttributes

// const img1 ="https://picsum.photos/200/300";

// ReactDOM.render(
//     // if url become wrong then alt will be shown in image
//     <>
//         <p> my name is fahad</p>
//         <h1 contentEditable= "true" > this is fahad </h1>
        
//         <img src={img1}  alt= "random images"  /> 
//     </>,
//     document.getElementById('root')

// );

// now with css
// const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";


// ReactDOM.render(
//     // if url become wrong then alt will be shown in image
//     // we have to write className becuase class is resorved in react
//     <>
//         <p className="heading"> my name is fahad</p> 
        
//         <div className="images">  <img src={img1}  alt= "random images"  />
//              <img src={img2}  alt= "random images"  />  

//      </div>
//     </>,
//     document.getElementById('root')

// );

// now using google font for html
// copy html font link and paste in htmk head
// then copy scc property of that link from google font and paste in css className


// now inline css
// for inline css in react we use object like we use in js


// const heading = { 
//         marginTop: '10',
//     //   text-align: center; // here it is an babel case so we have to convert inti camel case
//         textAlign : 'center'  ,
//       color: 'brown',
//          fontFamily: ' "Josefin Sans", sansSerif' 

      
//   }
//   const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";

// ReactDOM.render(
//     // if url become wrong then alt will be shown in image
//     // we have to write className becuase class is resorved in react
//     <>
//         <p style= {heading}> my name is fahad</p> 
        
//         <div className="images">  <img src={img1}  alt= "random images"  />
//              <img src={img2}  alt= "random images"  />  

//      </div>
//     </>,
//     document.getElementById('root')

// );


// react challange 3

// const time = new Date(2021 , 8 , 17 , 3);
// const currenttime = time.getHours();
// var greeting = ''

// // now dyanamic inline css style apllying

// const style = {};

// if(currenttime >= 1 && currenttime <= 11)
// {

//      greeting = 'goodmorning';   
//      style.color = 'green' 
// } 
// else if(currenttime >= 14 && currenttime <= 18)
// {

//      greeting = 'good afternoon'; 
//      style.color = 'orange' 
   
// }

// else if(currenttime >= 19 && currenttime <= 23 )
// {

//      greeting = 'black';   
//      style.color = 'red' 
 
// }




// ReactDOM.render(
//     <>
// <div >

//         <h1 >hellow world <span style={style}> { greeting}   </span> </h1>


//         </div>
//         </>,
// document.getElementById('root')

// );


// ReactDOM.render(

//     <>
//        <App />

//     </>,

//     document.getElementById('root')



// );

// react component challenge

// ReactDOM.render(   <App /> ,document.getElementById('root')

// );


// import export ES6 Modules
// import youtube from './ES6';
// import myyoutube, { mynonfav } from './ES6' // we can use anyname for default value that we export
// import youtube, {myfav, mynonfav, myname} from './ES6';
// we can also add all the data of es6 in  with one name
// import * as mydata from './ES6';

// ReactDOM.render (

//     <>
    
//     <ol>
//         {/* <li> This is Fahad</li>
//         {/* <li> {youtube}</li> */}
//         {/* <li> {myyoutube}</li> */}
//         {/* <li> {mynonfav}</li>
//         <li> {myfav}</li>
//         <li> {youtube}</li> */}
//         {/* // we use () with function */}
//         {/* <li> {myname()}</li>  */} 

//         <li> {mydata.mynonfav}</li>
//         <li> {mydata.myfav}</li>
//         <li> {mydata.default}</li>
//        <li> {mydata.myname()}</li>  

//     </ol>
    
//     </>,
//     document.getElementById('root')

// );


// react challnege 5 calculator

// import * as data from './Calculator';

// ReactDOM.render(

//     <>
//     <ol>
//         <ul> sum of two no is {data.add(2,4)} </ul>
//         <ul> subtraction of two no is {data.sub(2,4)} </ul>

//         <ul> multiplication of two no is {data.mul(2,4)} </ul>
//         <ul> division of two no is {data.division(2,300).toFixed(2)} </ul>

//     </ol>

//     </>,
//     document.getElementById('root')



// );

// now props in reactjs , here we will make netflix web design
// and array in reactjs here is in caradate

// import Card from './Cards'
// import carddata from "./Caradata"
// import logo from "./Darklogo.jpg"



// ReactDOM.render(
//         <>
//         <h1 className= "headingstyle"> My Favourate series on netflix</h1>
//         <Card 
//                 //   imgsrc={logo}

//              imgsrc={carddata[0].imgsource.logo}
//             cardcateg={carddata[0].cardcateg}
//             cardtitle = {carddata[0].cardtitle}
//             cardbutton={carddata[0].cardbutton}
        
//         />
//         <Card 
//         imgsrc={carddata[1].imgsource.logo}
//         cardcateg={carddata[1].cardcateg}
//         cardtitle = {carddata[1].cardtitle}
//         cardbutton={carddata[1].cardbutton}
        
//         />

//        <Card 
//             imgsrc={carddata[2].imgsource.logo}
//             cardcateg={carddata[2].cardcateg}
//             cardtitle = {carddata[2].cardtitle}
//             cardbutton={carddata[2].cardbutton}
        
//         />


    
//         </>
//     ,
//     document.getElementById('root')

// );


// now by using map method we simplify previous code wih thta

// import Card from './Cards'
// import carddata from "./Caradata"
// import logo from "./Darklogo.jpg"


// ist way

// function ncard(val){

//     return(
//         <Card
//         imgsrc= { val.imgsource.logo}
//         cardcateg = {val.cardcateg}
//         cardtitle = {val.cardtitle}
//         cardbutton={val.cardbutton}
//       />

//     );

// }



// ReactDOM.render(
//         <>
//         <h1 className= "headingstyle"> My Favourate series on netflix</h1>
        
//         {/* {carddata.map(ncard)} */} // ist way
        
//         {/* {carddata.map( function ncard(val){ // 2nd way


//                 return(

//                     <Card
//                     imgsrc= { val.imgsource.logo}
//                     cardcateg = {val.cardcateg}
//                     cardtitle = {val.cardtitle}
//                     cardbutton={val.cardbutton}
//                 />

//                 );



//         })} */}
        
// {carddata.map( (val) => { // thiredway by fatarror functiom// here we can write const name=()=>{} // we write direct fat arror fucntion withput name


// return(

//     <Card
//     imgsrc= { val.imgsource.logo}
//     cardcateg = {val.cardcateg}
//     cardtitle = {val.cardtitle}
//     cardbutton={val.cardbutton}
// />

// );


// })}
//         </>
//     ,
//     document.getElementById('root')

// );


// now debugging anjd error handling
// here is a warning about unique key
// se we have to give a unique key to every object/child compenet
// we cant write anything without key

// import Card from './Cards'
// import carddata from "./Caradata"
// import logo from "./Darklogo.jpg"

// ReactDOM.render(
//     <>
//     <h1 className= "headingstyle"> My Favourate series on netflix</h1>
    
// {carddata.map( (val) => { 

// return(

//         <Card
//         key = {val.id} // here we must write key as a name for uniquw value
//         // here we cant write like keys, name etc
//         // key help react which items has changed
//         // add, remove etc
//         imgsrc= { val.imgsource.logo}
//         cardcateg = {val.cardcateg}
//         cardtitle = {val.cardtitle}
//         cardbutton={val.cardbutton}
//     />
    
//     );
                    




// })}
//     </>
// ,

// document.getElementById('root')

// );

// if else in react

// import Card from './Cards'
// import carddata from "./Caradata"
// import logo from "./Darklogo.jpg"
// import Netflix from "./Netflix"
// import Amazon from "./Amazon";

// const Favourate ="netflix"

// const Fav =() =>{
// if(Favourate == "netflix"){
//    return <Netflix />
// }else if (Favourate == "amazon"){
//             return <Amazon />
// }
    
// };


// ReactDOM.render(
//     <>
//     <h1 className= "headingstyle"> My Favourate series on netflix</h1>
//     <Fav />

// </>
// ,

// document.getElementById('root')

// );

// now using turnory operator
// (condtion ? true : false)

// import Card from './Cards'
// import carddata from "./Caradata"
// import logo from "./Darklogo.jpg"
// import Netflix from "./Netflix"
// import Amazon from "./Amazon";

// const Favourate ="netflix"

// // const Fav =() =>{
// // if(Favourate == "netflix"){
// //    return <Netflix />
// // }else if (Favourate == "amazon"){
// //             return <Amazon />
// // }
    
// // };


// ReactDOM.render(
//     <>
//     <h1 className= "headingstyle"> My Favourate series on netflix</h1>
//     {/* <Fav /> */}
//     {(Favourate == "netflix") ? <Netflix /> : <Amazon />}

// </>
// ,

// document.getElementById('root')

// );


// *************************Hooks in react Js************
// changing states of anything
// so we use hooks 


// import react from 'react'
// import  reactDOM from "react";
// import Challange from './Hooks'

// ReactDOM.render (
//         <>
//             <Challange />
//         </>,

//         document.getElementById('root')

// )



// Events handling
// import react from 'react'
// import  reactDOM from "react";
// import Events from './Events'

// ReactDOM.render (
//         <>
//             <Events />
//         </>,

//         document.getElementById('root')

// )


// Forms in react
// import react from 'react'
// import  reactDOM from "react";
// import FormsApp from './FormsApp'

// ReactDOM.render (
//         <>
//             <FormsApp />
//         </>,

//         document.getElementById('root')

// )

// login form

// import react from 'react'
// import  reactDOM from "react";
// import LoginForm from './LoginForm'

// ReactDOM.render (
//         <>
//             <LoginForm />
//         </>,

//         document.getElementById('root')

// )

// spread ... operator

// import react from 'react'
// import  reactDOM from "react";
// // import Spread from './SpreadOperator'
// // import LoginForm from './LoginForm'
// import TodoList  from './TodoList'
// import  './CssForTodo.css'

// ReactDOM.render (
//         <>
//             {/* < Spread/> */}
//             {/* <LoginForm /> */}
//             {<TodoList />}
//         </>,

//         document.getElementById('root')

// )

// Increment and decrement task
// import react from 'react'
// import  reactDOM from "react";

// import Increment  from './Increment'
// // import  './CssForTodo.css'
// // import Clocks from './DigitalClock'
// import DigitalClock from "./DigitalClock"


// ReactDOM.render (
//         <>
//             {/* < Spread/> */}
//             {/* <LoginForm /> */}
//             {/* {<TodoList />} */}
//             {/* <Increment /> */}
//             <DigitalClock />

//         </>,

//         document.getElementById('root')

// )

// Todolist With material Uicon
// import react from 'react'
// import  reactDOM from "react";

// // import  './CssForTodo.css'
// import ToDoMuiCon from './ToDoMuiCon'
// ReactDOM.render (
//         <>
            
//             <ToDoMuiCon />
            

//         </>,

//         document.getElementById('root')

// )
// for  bootstrap
// import react from 'react'
// import  reactDOM from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// // import  './CssForTodo.css'
// ReactDOM.render (
//         <>
            
//             <h1 className="text-center mt-5"> Welcome to bootstrap</h1>
//             <button className="btn btn-success">Fahad</button>

//         </>,

//         document.getElementById('root')

// )

// Accordon App
// import react from 'react'
// import  reactDOM from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Accordon from './Accordion/Accordon'

// // import  './CssForTodo.css'
// ReactDOM.render (
//         <>
            
//             <Accordon />

//         </>,

//         document.getElementById('root')

// )

// Google clone app

// import react from 'react'
// import  reactDOM from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import GoogleClone from './GoogleCloneApp/GoogleClone'
// // import  './CssForTodo.css'

// ReactDOM.render (
//         <>             
//             <GoogleClone />


//         </>,

//         document.getElementById('root')

// )

// context
// import react from 'react'
// import  reactDOM from "react";
// import Parent from './Context/Parent'
// ReactDOM.render (
//         <>             
//             <Parent />


//         </>,

//         document.getElementById('root')

// )

// // useeffecthook
// import  reactDOM from "react";
// import react from "react";
// import UseEffectHook from './UseEffectHook'
// ReactDOM.render (
//         <>             
//             <UseEffectHook />


//         </>,

//         document.getElementById('root')

// )


// // Working with Covid Api
// import  reactDOM from "react";
// import react from "react";
// import StateWise from './StateWiseData/StateWise'
// ReactDOM.render (
//         <>             
//             <StateWise/>


//         </>,

//         document.getElementById('root')

// )

// Working Api And AXiom Pokeman
// import  reactDOM from "react";
// import react from "react";
// import ComA from './PokeManApi/ComA'
// ReactDOM.render (
//         <>             
//             <ComA />


//         </>,

//         document.getElementById('root')

// )


// Working with ReactRouter

// import  reactDOM from "react";
// import react from "react";
// import {BrowserRouter} from 'react-router-dom'

// import MainApp from './ReactRouter/MainApp'
// ReactDOM.render (
//         <>    
//         <BrowserRouter>        
//             <MainApp />

//             </BrowserRouter> 
//         </>,

//         document.getElementById('root')

// )

// Animted Website

// Working with ReactRouter

import  reactDOM from "react";
import react from "react";
import AnimatedMainApp from './AnimatedWebsite/AnimatedMainApp'

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render (
        <>    
        <BrowserRouter>        
            <AnimatedMainApp />

            </BrowserRouter> 
        </>,

        document.getElementById('root')

)