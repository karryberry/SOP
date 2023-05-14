import React from "react"
import "../components/css/Table.css"

export default function SmallButton(props) {
    return(
        <button 
            type={props.type}
            className="smallButton"
            onClick={props.onClick}
            style={{color: props.color, backgroundColor: props.backgroundColor}}
        >
            {props.text}
        </button>
    )
}