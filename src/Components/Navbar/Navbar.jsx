import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return(
        <nav className='navbar'>
        
            <h1>Music Library</h1>

            <div className="buttons">
                <ul>
                    <li>
                        <a className="nav-link active" aria-current="page" href="#">Menu</a>
                    </li>
                    <li>
                         <a className="nav-link" href="#">Reset</a>
                    </li>
                </ul>
            </div>
        
        </nav>
    )  
}

export default Navbar;

















