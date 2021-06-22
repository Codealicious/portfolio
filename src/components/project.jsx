const Project = (props) => {

        switch(props.projectId) {
            case 1:
                return (
                    <div id="project">
                        <div className="wrapper">
                            <a className="close" href="#projects"><span className="x"></span></a>
                        </div>
                        <h2>checkers- built with:</h2>
                        <ul>
                            <li>html</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                        </ul>
                        <img src="./assets/images/github.png" alt="checker game" className="github" />
                        <a href="https://codealicious.github.io/checkers/" rel="noreferrer" target="_blank" className="try-it">try it &rarr;</a>
                    </div>
                    );
            case 2:
                return (
                    <div id="project">
                        <div className="wrapper">
                            <a className="close" href="#projects"><span className="x"></span></a>
                        </div>
                        <h2>battleship-built with:</h2>
                        <ul>
                            <li>html</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                        </ul>
                        <img src="./assets/images/github.png" alt="checker game" className="github" />
                        <a href="https://codealicious.github.io/battleship/" rel="noreferrer" target="_blank" className="try-it">try it &rarr;</a>
                    </div>
                    );
            case 3:
                return (
                    <div id="project">
                        <div className="wrapper">
                            <a className="close" href="#projects"><span className="x"></span></a>
                        </div>
                        <h2>Inventory app built with:</h2>
                        <ul>
                            <li>JavaFX</li>
                        </ul>
                        <img src="./assets/images/github.png" alt="checker game" className="github" />
                    </div>
                    );
            default:
                break;
        }
}
 
export default Project;