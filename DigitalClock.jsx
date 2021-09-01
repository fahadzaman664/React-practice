import react from 'react'

import Clock from 'react-digital-clock';
import Countdown from 'react-countdown';
import ReactCountdownClock from "react-countdown-clock"



const DigitalClock =() =>{

    const myCallback = ()=>{

            

    };
            

            return( 
            <>
            <h1> fahad</h1>
            <Countdown date={Date.now() + 10000} />
            <ReactCountdownClock seconds={10}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={myCallback}
                     />

            <Clock />
        </>
            )


};

export default DigitalClock;