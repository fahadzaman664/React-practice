import react, { useState } from 'react'
import { question } from './AccordionApi';
import './Accordion.css'
import MyAccordion from './MyAccordion';

const Accordon =()=> {

        const [data,setdara]= useState(question);        

        return(

                <>  
                <h1>fahad</h1>
                        {
                                data.map((curElement)=>{
                                
                                return <MyAccordion key={curElement.id } {...curElement}  />



                                })
                        }
                
                

                </>


        );



}

export default Accordon;