import react from 'react'
import React, { createContext } from 'react'
import CompB from './CompB';


const FirstName = createContext();
const LastName = createContext();


const CompA= ()=>{

    return  <>
    <FirstName.Provider value={"Fahad"}>
        <LastName.Provider value={"Zaman"}>
        <CompB />

        </LastName.Provider>

    </FirstName.Provider>

    </>;


}

export {CompA , FirstName,LastName};