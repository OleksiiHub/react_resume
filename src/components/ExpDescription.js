function ExpDescription(props) {
    return (
        <div className="description-style">
            <h3 className="description-style_header header-style mar_h3_h4_h5">Summary</h3>
            <p className="description-style_header mar_h3_h4_h5">I am a beginner frontend developer.
                I completed courses in this area, I am engaged in self-study.
                In the future, I plan to get to know Node.js, Express.js, Nest.js, Koa.js and MongoDB better.
                At the moment I know html5, css3, JavaScript, React, Git, preprocessors less, sass, scss. I am learning Redux.
                I use the libraries ReactBootstrap , Tailwind and others.</p>
            <h3 className="description-style_header header-style mar_h3_h4_h5">Skills Highlights</h3>
            <div class="description-style_skills mar_h3_h4_h5">
                <div class="col-50">
                    <ul>
                        <li> HTML5</li>
                        <li> CSS3</li>
                        <li> JavaScript</li>
                        <li> React</li>
                    </ul>
                </div>
                <div class="col-50">
                    <ul>
                        <li> Bootstrap</li>
                        <li> Git</li>
                        <li> SASS SCSS LESS</li>
                        <li> Redux</li>
                    </ul>
                </div>
            </div>
            <h3 className="description-style_header header-style mar_h3_h4_h5">Work Experience</h3>
            <div className="description-style_border">
                <p className="description-style_comment"><span className="description-style_experience">Name of employer:</span> Khladoprom Ice Cream Factory(Kharkiv, Mariupol)</p>
                <p className="description-style_comment"><span className="description-style_experience">Dates of employment:</span> 2019-2021</p>
                <p className="description-style_comment"><span className="description-style_experience">Job title:</span> Head of trade department</p>
                <p className="description-style_comment"><span className="description-style_experience">Project/Role description:</span> Recruitment and training of personnel, product promotion, contracting, marketing, advertising, logistics, receivables control, reporting.</p>
            </div>
            <div className="description-style_border">
                <p className="description-style_comment"><span className="description-style_experience">Name of employer:</span> Viciunai Group(Kharkiv, Kharkiv region)</p>
                <p className="description-style_comment"><span className="description-style_experience">Dates of employment:</span> 2021-2022</p>
                <p className="description-style_comment"><span className="description-style_experience">Job title:</span> Territorial manager</p>
                <p className="description-style_comment"><span className="description-style_experience">Project/Role description:</span> Conclusion of contracts, marketing, control of receivables, connection of distributors, training of the sales team of the distributor, search for new sales channels.</p>
            </div>
            <h3 className="description-style_header header-style mar_h3_h4_h5">Education</h3>
            <div className="description-style_border">
                <p className="description-style_comment"><span className="description-style_experience">Dates of studying:</span> c 2022 – по 2023</p>
                <p className="description-style_comment"><span className="description-style_experience">Name of institution:</span> IT_Generation robotdreams</p>
                <p className="description-style_comment"><span className="description-style_experience">Degree and major</span> JavaScript developer</p>
            </div>
            <div className="description-style_border">
                <p className="description-style_comment"><span className="description-style_experience">Dates of studying:</span> c 2022 – по 2022</p>
                <p className="description-style_comment"><span className="description-style_experience">Name of institution:</span> PROG_academy</p>
                <p className="description-style_comment"><span className="description-style_experience">Degree and major</span> JavaScript developer</p>
            </div>
            <div className="description-style_border">
                <p className="description-style_comment"><span className="description-style_experience">Dates of studying:</span>c 2022</p>
                <p className="description-style_comment"><span className="description-style_experience">Name of institution:</span> Udemy(Bogdan Stashchuk, Ivan Petrychenko)</p>
                <p className="description-style_comment"><span className="description-style_experience">Degree and major</span> WEB, HTML5, CSS3, JavaScript, React, Git, Redux</p>
            </div>
            <div className="description-style_border">
                <a className="btn description-style_btn" target={props.target} href="http://localhost:3000/">Weather ReactApp</a>

            </div>
        </div>
    )
}

export default ExpDescription