import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const AppNavbar = () => {
    return ( 
        <nav className="navbar navbar-expand-md bg-danger navbar-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Logo</NavLink>
                  
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/users/add" className="btn btn-outline-light">
                    Add User
                </Link>
            </div>
        </nav>
     );
}
 
export default AppNavbar;