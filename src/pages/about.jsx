const About = () => {

    const toggle = () => {

        let lists = document.querySelectorAll(".list__container");

        console.log("click event being processed...");

        lists.forEach((list) => {
            if(list.className.includes("selected"))
                list.classList.remove("list--selected");
            else
                list.classList.add("list--selected");
        });
    }

    return ( 
        <section className="about">
            <div onClick={toggle} className="list__button">
                &rarr;
            </div>
            <div className="img-container img-container--top">
                <img src="./assets/images/wgu.png" alt="" className="img" />
            </div>
            <div className="img-container img-container--bottom">
                <img src="./assets/images/ga.png" alt=""/>
            </div>
            <div className="list__container dev list--selected">
                <h2 className="list__headline dev__headline">Tools / Frameworks</h2>
                <ul className="list">
                    <li>React</li>
                    <li>Sass</li>
                    <li>Git</li>
                    <li>Node.<span>js</span></li>
                    <li>Django</li>
                </ul>
            </div>
            <div className="list__container languages">
                <h2 className="list__headline languages__headline">Languages</h2>
                <ul className="list">
                    <li>Python</li>
                    <li>CSS3</li>
                    <li>HTML</li>
                    <li>Java</li>
                    <li>C</li>
                    <li >C++</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </section>
     );
}
 
export default About;