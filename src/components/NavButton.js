import React from 'react'
import "../components/css/Navbar.css"

export default function NavButton(props) {


    return(
        <button
            className = "nav--button"
            onClick = {props.onClick}
        >{props.navButtonName}
        </button>
    )
   
}