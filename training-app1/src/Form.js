import { useState } from "react";
import React from "react";

function Form(props){
    const names=props.name
    const[name,setName]=useState("");

const handleChange=(e)=>{
    setName(e.target.value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit(name);
    
}

return(
    <form onSubmit={handleSubmit}>
        <div>
        <h1>My name is {names}.</h1> 
        </div>
    <div>
    <label >name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
                <button type="submit">submit</button>
    </div>
    </form>
)
}
export default Form;