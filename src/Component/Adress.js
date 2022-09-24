import React from "react";

const location = prompt("Where do you live ?")

function Adress() {
    return (
        <>
            <div>
                I live in <b className="input">{location}</b>
            </div>
        </>
    )
}

export default Adress;