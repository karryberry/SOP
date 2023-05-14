import React from "react"
import "../css/AddSOPForm.css"
import UserData from "../../data/UserData"
import JobRoleData from "../../data/JobRoleData"

export default function UJBRelationForm({onSubmitAdd, onChange, first, second}) {

    return (
        <form autoComplete="off" onSubmit={onSubmitAdd} className="relationForm">
            <label id="Username">{first}</label>
            <select
                id="username"
                defaultValue="defaultOne"
                name="username"
                label="Username"
                onChange={onChange}
                required="required"
            >
                <option value="defaultOne" disabled>Select {first}</option>
                {UserData.map((el) => <option key={el.id} value={el.username}>{el.username}</option>)}
            </select>

            <label id="JB">{second}</label>
            <select
                id="jobrole"
                name="jobrole"
                defaultValue="defaultTwo"
                label="Job Role"
                onChange={onChange}
                required="required"
            >
                <option value={"defaultTwo"} disabled>Select {second}</option>
                {JobRoleData.map((el) => <option key={el.id} value={el.title}>{el.title}</option>)}
            </select>
        </form>
    )
}