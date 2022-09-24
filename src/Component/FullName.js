import React from "react";

const name = prompt("What's your name ?")
console.log("test outside the function")
function FullName() {
    return(
        <>
        <div>
            <h1>HELLO</h1>
            <p>This is <b className="input">{name}</b></p>
        </div>
        </>
    )
}

export default FullName;