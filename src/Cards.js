import React from "react";
import './App.css'



const Card = ({image, text}) =>{

    return(
        <div className="cardContainer">
            <img src={image} />
            <div className="textContainer">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card;