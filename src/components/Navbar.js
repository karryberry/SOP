import React from "react";
import { Link, HashRouter } from "react-router-dom"
import NavButton from "./NavButton"
import "../components/css/Navbar.css";

export default function Navbar(props) {

    return(
        <HashRouter basename="/">
            <nav>
                <img className = "nav--logo" src="./i4i.png" alt="i4i logo"/>
                <ul className="nav-pages">
                    <li>
                        <Link to="/">
                            <NavButton navButtonName="HOME"></NavButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/SOPs">
                            <NavButton navButtonName="SOPS"></NavButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/JobRoles">
                            <NavButton navButtonName="JOB ROLES"></NavButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Users">
                            <NavButton navButtonName="USERS"></NavButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/SOPJB">
                            <NavButton navButtonName="SOPJB"></NavButton> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/UserJB">
                            <NavButton navButtonName="USERJB"></NavButton> 
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/">
                            <NavButton navButtonName="HELP"></NavButton>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/">
                            <NavButton onClick={props.onClick} navButtonName="SIGN OUT"></NavButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </HashRouter>
        
    )    
}