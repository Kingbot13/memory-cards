import React from "react";

function Cards(props) {
    console.log('props:', props);
    const {items} = props;

    const characters = items.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.image}></img>
                <p>{item.name}</p>
            </div>
        )
    });

    return(
        <div>
            {characters}
        </div>
    )
}

export default Cards;

