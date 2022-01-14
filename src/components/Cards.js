import React from "react";

function Cards(props) {
    return(
        <div>
            <img src={props.image}></img>
            <p>{props.name}</p>
        </div>
    )
}

export default Cards;

