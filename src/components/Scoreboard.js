import React from "react";
import '../styles/Scoreboard.css';

function Scoreboard(props){
    return(
        <div className="score-container">
            <p>Score: {props.score}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    )
}

export default Scoreboard;