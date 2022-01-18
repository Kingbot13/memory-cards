import React from "react";
import '../styles/Scoreboard.css';

function Scoreboard(props){
    return(
        <div className="score-container">
            Score: {props.score}
        </div>
    )
}

export default Scoreboard;