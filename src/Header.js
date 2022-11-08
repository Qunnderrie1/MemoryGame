import React from "react";
import "./App.css"

const Header = ({title, objective, score, bestScore}) =>{

    return(
        <div className="headerContainer">
            <h3>{title}</h3>
            <p>{objective}</p>
            <div className="scoreContainer">
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>
    )
}

export default Header;