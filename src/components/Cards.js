import React from "react";
import '../styles/Cards.css';

function Cards(props) {
    const {item} = props;

    return(
        <div className="card-container" data-id={item.id} onClick={(e)=>props.shuffle(e)}>
            <img src={item.image}></img>
            <p>{item.name}</p>
            
        </div>
    )
}

export default Cards;

