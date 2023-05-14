import React from "react"
import "../css/AddSOPForm.css"
import AdminHomeData from "../../data/AdminHomeData"
import JobRoleData from "../../data/JobRoleData"

export default function AddSOPForm({onSubmitAdd, onChange, Data, first, second}) {

    return (
        <form autoComplete="off" onSubmit={onSubmitAdd} className="relationForm">
            <label id="SOP">{first}</label>
            <select
                id="sop"
                defaultValue="defaultOne"
                name="sop"
                label="SOP"
                onChange={onChange}
                required="required"
            >
                <option value="defaultOne" disabled>Select {first}</option>
                {AdminHomeData.map((el) => <option key={el.id} value={el.title}>{el.title}</option>)}
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