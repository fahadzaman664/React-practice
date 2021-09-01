import react, {useContext} from 'react'
import {FirstName,LastName} from './CompA'

const CompB = ()=>{

    // return (
    // <>
                
    //            { <FirstName.Consumer>
    //                  {(fname)=> {

    //                      return (
    //                         <LastName.Consumer >
    //                             {
    //                                 (lname)=>{
    //                                     return (<h1>{fname}{lname}</h1>);
    //                                 } }

    //                         </LastName.Consumer>
    //                         );
                         
                         
    //                 }
    //             }
                    



    //             </FirstName.Consumer>}
    //         </>
    // );




    // By use Context

    const fname  = useContext(FirstName)
    const lname  = useContext(LastName)

    return (
            <h1> 
                my name is {fname} {lname}
                </h1>
    );

}

export default CompB;