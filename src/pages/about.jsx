const About = () => {

    const toggle = () => {

        let lists = document.querySelectorAll(".list__container");

        lists.forEach((list) => {
            if(list.className.includes("selected"))
                list.classList.remove("list--selected");
            else
                list.classList.add("list--selected");
        });
    }

    return ( 
        <section className="about">
            <div className="img-container">
                <div className="img-container__top">
                    <img className="img-container__img img-container__img--1" src="./assets/images/wgu.png" alt=""/>
                </div>
                <div className="img-container__bottom">
                    <img className="img-container__img img-container__img--2" src="./assets/images/ga.png" alt=""/>
                </div>
            </div>
            <div className="lists">
                <span className="lists__button" onClick={toggle}>&rarr;</span>
                <div className="list__container list--selected">
                    <h2 className="list__headline dev">Tools / Frameworks</h2>
                    <ul className="list">
                        <li>React</li>
                        <li>Sass</li>
                        <li>Git</li>
                        <li>Node.<span>js</span></li>
                        <li>Django</li>
                    </ul>
                </div>
                <div className="list__container">
                    <h2 className="list__headline languages">Languages</h2>
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
            </div>
        </section>
     );
}
 
export default About;