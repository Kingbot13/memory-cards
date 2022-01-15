import React from "react";

function Cards(props) {
    // console.log('props:', props);
    const {item} = props;

    // const characters = items.map((item) => {
    //     return (
    //         <div key={item.id}>
    //             <img src={item.image}></img>
    //             <p>{item.name}</p>
    //         </div>
    //     )
    // });

    return(
        <div>
            <img src={item.image}></img>
            <p>{item.name}</p>
            {/* {characters} */}
        </div>
    )
}

export default Cards;

