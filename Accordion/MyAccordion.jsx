import react, { useState } from 'react'
import Accordon from './Accordon';

const MyAccordion=({quest , answer})=>{ // we can also get this by props

const [show , setshow] =useState(false)

    return(
            <>
            <div className="text-center">
                  <p  onClick={() => setshow(!show)} > {show? "-": " + "} </p>
                    <h3> {quest}</h3>

                    {show && <p> {answer}</p>}


                    </div>
            </>


    );



}

export default MyAccordion;