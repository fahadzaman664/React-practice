import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Animated.css"


import { Switch,Route,Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from "./Navbar"

const AnimatedMainApp = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/"   component={Home} />
                <Route exact path="/about"   component={About} />
                <Route exact path="/services"   component={Services} />
                <Route exact path="/Contact"   component={Contact} />
                <Redirect to="/"   />

            </Switch>
        {/* <Home />
        <About />
        <Services />
        <Contact /> */}
        
        
        </>
    )
}

export default AnimatedMainApp;
 