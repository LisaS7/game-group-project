import React from "react";


import "./GameEnd.css";
const GameEnd = ({handleGameReset}) => {

function handleClick () {
    handleGameReset(true); 
    console.log('button clicked')
}

    return(
        <div className="game-over-container">
            <div className="game-over"> 
                <h1>Game Over</h1>
                <button onClick={handleClick}>Restart Game</button>
            </div>
        </div>
    )

}

export default GameEnd;