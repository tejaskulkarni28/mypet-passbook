import React from "react";
import {Link} from "react-router-dom";

const NavigationBar = ()=>{
    return(
        <div className="nav-container">
            <ul>
                <Link to="/"><li>Pet Diary</li></Link>
                <Link to="/admin"><li>Admin</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </div> 
    )
}

export default NavigationBar;