import React, { useState } from 'react';
import Project from "../components/project";

const Projects = () => {

    const lastIndex = 3;

    let [currentIndex, setIndex] = useState(1);

    let setImage = () => {
        return `./assets/images/slide-${currentIndex}.png`;
    }

    let setTitle = () => {
        switch(currentIndex) {
            case 1:
                return "checkers game";
            case 2:
                return "battleship game";
            case 3:
                return "inventory app";
            default:
                break;
        }
    }

    let onClick = (e) => {

        let index =  currentIndex;

        if(e.target.className === "left-arrow") {
            if(index === 1) 
                index = lastIndex;
            else
                --index; 
                
            setIndex(index);
          
        }else if(e.target.className === 'right-arrow') {
            if(index === lastIndex)
                index = 1;
            else 
                ++index;

            setIndex(index);
        }
    }

    return (
        <section className="projects" id="projects">
            <Project projectId={currentIndex} />
            <div className="projects__container" onClick={(e) => {onClick(e)}}>
                <div className="left-arrow">
                    &lt;
                </div>
                <a href="#project"><img src={setImage()} alt="project" /></a>
                <div className="right-arrow">
                    &gt;
                </div>
                <h1>{setTitle()}</h1>
            </div>
        </section> 
    );
}
 
export default Projects;