import React from "react"
import BigButton from "../BigButton"
import "../css/SignIn.css"
import "../css/Table.css"

export default function SignIn(props) {
    return(
            <div className="dialog" >
                <img className="SOPimg" src="./SOP.png" alt="SOP logo"/>
                <form id="signIn" className="form">
                    <input 
                        required="required"
                        className="signInInput"
                        type="text"
                        placeholder="Username"
                    ></input>
                    <input
                        required="required"
                        className="signInInput"
                        type="password"
                        placeholder="Password"
                    ></input>
                </form> 
                <BigButton type="submit" form="signIn" text="LOG IN" onClick={props.onClick}/>
            </div>
    )
}