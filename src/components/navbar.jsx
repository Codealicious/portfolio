import { Link}  from "react-router-dom";
import React, { useEffect } from 'react';

const Navbar = () => {

    // Keep current page's nav item slected upon page referesh
    useEffect(() => {
        let links = document.querySelectorAll(".navigation__item");
        let location = window.location.href;

        links.forEach((link) => {
            if(location.includes(link.textContent))
                link.classList.add("selected");
        })
    })

    let onClick = () => {
        let links = document.querySelectorAll(".navigation__item");
        let location = window.location.href;
        let navButton = document.querySelector(".navigation__checkbox");

        links.forEach((link) => {
            if(location.includes(link.textContent))
                link.classList.add("selected");
            else
                link.classList.remove("selected");
        })

        if(navButton)
            navButton.checked = false;

    }

    return ( 
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">
                        &nbsp;
                    </span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list" onClick={onClick}>
                        <Link to="about"> 
                            <li className="navigation__item">about</li>
                        </Link>
                        <Link to="projects">
                            <li className="navigation__item">projects</li>
                        </Link>
                        <Link to="connect">
                            <li className="navigation__item">connect</li>
                        </Link>
                    </ul>
                </nav>
            </div>
     );
}
 
export default Navbar;  