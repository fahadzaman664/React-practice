import React from 'react'
// import {Link} from 'react-router-dom' // here we use link in react instaed of <a anchor tag
// becuase in link it cant reload so that we want in reac js
// but in anchor tag it reload
import {NavLink} from 'react-router-dom'
// here in new update we use NavLink becuase we can give ClassName with NavLink so by that we know
// which tab is open


const Menu = () => {
    return (
        <div className="mainmenu">
            <NavLink exact activeClassName="active_class" to="/"> About US</NavLink>
            <NavLink exact activeClassName="active_class"to="/contact"> Contact US</NavLink>
            <NavLink exact activeClassName="active_class"to="/services"> Services</NavLink>
            <NavLink  exact activeClassName="active_class"to="/user/fname/lname"> User</NavLink>
            <NavLink exact activeClassName="active_class"to="/search"> Seacrh</NavLink>



            {/* <Link to="/"> About US</Link>
            <Link to="/contact"> Contact US</Link> */}
            <br></br>


            {/* <a href="/">About us</a>
            <a href="/contact"> Contact us</a> */}
        </div>
    )
}

export default Menu
