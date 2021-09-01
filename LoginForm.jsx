// import react, { useState } from 'react'
// import  reactDOM from "react";



// const LoginForm = () => {
    
//     const[name , set] = useState("");
//     const[FullName , setname] = useState("");
//     const[pass, password] = useState("")
//     const[newpass, newpassword] = useState("")

    
    





// const InputEvent =(event)=> {

//         console.log(event.target.value);
//         set(event.target.value)
// }
// const InputPassword =(event)=> {

//     console.log(event.target.value);
//     password(event.target.value)
// }
// const onSubmits = (e)=> {
//     e.preventDefault(); // here we prevent the defualt behaviour of form and the value not on form remain same


//     setname(name);
//     newpassword(pass);

// }



// return(

// <>
//             <div className="maincontainer">
//                 <form onSubmit={onSubmits}>
//     <div>
//             <h1> Hello {FullName} {newpass} </h1>
//             <input type="text" placeHolder="enter your name" 
//              onChange= {InputEvent} value={name} />
//               <input type="text" placeHolder="enter your name" 
//              onChange= {InputEvent}  />


//             <button type="submit" > Submit</button>


//     </div>
//     </form>
//     </div>
// </>


// );

// }
// export default LoginForm;


// ************* Handling complex multiple input from states ****

import react, { useState } from 'react'
import  reactDOM from "react";



const LoginForm = () => {
    
    const [FullName , SetFullName] = useState({

//we make object to take data from name0 and store here
                 fname:"",
                 lname : "",
                 email: "",

    });

const InputEvent =(event)=> {

        // console.log(event.target.value);
        // console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const {value , name} = event.target;


        SetFullName((previousVal)=>{ // we can see the previous value

            // here we can simplify the following code with spread opdartor om two lines

            return{
                    ...previousVal,
                    [name]:value,

            };
        
            // if(name === "fName"){
            //    return {
            //        fname : value,
            //     lname : previousval.lname,
            //     email : previousval.email,
            //    }
            // } else if(name === "lName") {
            //             return {
            //         fname :previousval.fname,
            //         lname : value,
            //         email : previousval.email,


            //             };
            //         }

            //                  else if(name === "Email") {
            //                 return {
            //             fname :previousval.fname,
            //             lname :previousval. value,
            //             email : value,

            //                 };

            // }



        });

};

const onSubmits = (e)=> {
    e.preventDefault(); // here we prevent the defualt behaviour of form and the value not on form remain same


}



return(

<>
            <div className="maincontainer">
                <form onSubmit={onSubmits}>
    <div>
            <h1> Hello {FullName.fname} {FullName.lname} {FullName.email} </h1>
            <input type="text" placeHolder="enter your first name" 
            name ="fName"
             onChange= {InputEvent} 
             value={FullName.fname}
              />
              <input type="text" placeHolder="enter your last name" 
              name="lName"
             onChange= {InputEvent} 
             value ={FullName.lname}
              />
                 <input type="text" placeHolder="enter your email" 
              name="Email"
             onChange= {InputEvent} 
             value ={FullName.email}
              />

            <button type="submit" > Submit</button>


    </div>
    </form>
    </div>
</>


);

}
export default LoginForm;

// in input field name="" is used to check whcih data is user writing and save in database
