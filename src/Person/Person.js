import React from "react";

const Person = (props) => {
    return(
        <div>
            <p>My name is {props.name} and i am {props.age} years old</p>
            <input value={props.value} onChange={props.click}/>
        </div>
    );
}

export default Person;