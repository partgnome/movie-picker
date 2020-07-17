import React from "react";
import {Link, useLocation} from "react-router-dom";
import {toggleLinkContainer, closeLinkContainer} from "./utility";
import {v4 as uuidv4} from "uuid";
import "./Dropdown.css";

function Dropdown(props) {
    let {keys, filmData, randomPath} = props;
    let location = useLocation();
    let path = location.pathname;
    let key = path.split("/")[1]; // either "" or path
    
    function getLinks() {
        return keys.map(key => (
        <li key={uuidv4()}>
            <Link to={filmData[key].path} onClick={toggleLinkContainer}>
                <div>{filmData[key].title}</div>
            </Link>
        </li>
        ));
    }

    function getCurrent() {
        if (key === "" || key === "about" || !(keys.includes(key))) {
            return (
                <span>
                    Choose a film
                    <span id="caret" className="fas fa-caret-down"></span>
                </span>
            );
        } else {
            return (
                <span>
                    {filmData[key].title}
                    <span id="caret" className="fas fa-caret-down"></span>
                </span>
            );
        }
    }

    return (
        <div className="Dropdown-container">
            <div className="Button-container">
                <Link to="/about" className="smaller NavbarLink">About</Link>
                <button id="dropdownToggle" className="larger" onClick={toggleLinkContainer}>{getCurrent()}</button>
                <Link className="smaller NavbarLink" to={randomPath} onClick={closeLinkContainer}>Random</Link>
            </div>
            <ul className="Link-container hidden">
                {getLinks()}
            </ul>
        </div>
    );
}

export default Dropdown;