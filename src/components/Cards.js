import React from "react";

function Cards(props) {
    // console.log('props:', props);
    const {item} = props;

    return(
        <div data-id={item.id} onClick={(e)=>props.shuffle(e)}>
            <img src={item.image}></img>
            <p>{item.name}</p>
            {/* {characters} */}
        </div>
    )
}

export default Cards;

