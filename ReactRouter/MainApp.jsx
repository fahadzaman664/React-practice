import React from 'react'
import Contact from './Contact'
import { Route , Switch } from 'react-router-dom'
import About from './About'
import Error from './Error'
import Menu from './Menu'
import Services from './Services'
import UseParamsHook from './UseParamsHook'
import Search from './Search'
import './Menu.css'
const  MainApp= ()=> {

    const Name =()=>{

        return <h1> this is name page</h1>
    }
    return (

        // here in router in path / mean main home page and Compoenet mean only show that compoenet when we want
        // when we use switch it will only show one path that we give , not many like about and contact both
        
        // if we write exact it will only show that one <>
        // if want to use name with cnotact we have to give exat to contact becuase other switch doesnot understand
        <>
        <Menu />
        <switch>
                <Route exact path="/" component={About} /> 
                <Route exact path="/contact" component={Contact} /> 
                <Route exact path="/services" component={Services} /> 
                <Route exact path="/user/:fname/:lname" component={UseParamsHook} /> 
                <Route exact path="/search" component={Search} /> 



                <Route path="/contact/name" component={Name} />

                {/* <Route  component={Error} /> */}


        </switch>
            
        </>
    )
}

export default MainApp
