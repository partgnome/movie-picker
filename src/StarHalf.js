import React from "react";
import {ReactComponent as Solid} from "./solid.svg";
import {ReactComponent as Outline} from "./outline.svg";
import "./StarHalf.css";

function StarHalf(props) {
    let classes = `
        ${props.isFlipped && "StarHalf-flipped"}
        ${props.isHovering ? "StarHalf-hover" : "StarHalf-saved"}
    `;

    function handleMouseOver() {
        let val = props.halfIndex === 0 ? 0.5 : 1;
        props.updateHoverStars(val, props.parentIndex);
    }
    
    function handleClick() {
        let val = props.halfIndex === 0 ? 0.5 : 1;
        props.updateSavedStars(val, props.parentIndex);
    }

    return (
        <span className="StarHalf">
            {props.isFilled 
            ? <Solid className={classes} onClick={handleClick} onMouseOver={handleMouseOver}/> 
            : <Outline className={classes} onClick={handleClick} onMouseOver={handleMouseOver}/>}
        </span>
    )
}

export default StarHalf;