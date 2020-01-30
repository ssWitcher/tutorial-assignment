import React from "react";

const Person = (props) => {
    return(
        <div>
            <p onClick={props.click}>My name is {props.name} and i am {props.age} years old</p>
            <input onChange={props.changed}/>
        </div>
    );
}

export default Person;