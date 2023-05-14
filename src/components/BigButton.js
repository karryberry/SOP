import React from "react"
import "../components/css/Table.css"

export default function BigButton(props) {
    return(
        <button 
            className="largeButton"
            onClick={props.onClick}
            type={props.type}
            form={props.form}
        >
            {props.text}
        </button>
    )
}