function AboutMe(props) {
    return (
        <div className="about-style theme-color_backgroud">
            <h1>Oleksii Buntikov</h1>
            <img className="about-style_img" src={props.src} alt={props.alt} />
            <h3 className="ml-1">Contact</h3>
            <h4>Phone</h4>
            <h6><a href="tel:+74951111111">+38 (006) 007-57-37</a></h6>
            <h4>E-mail</h4>
            <h6><a href="mailto:githubbai@gmail.com">githubbai@gmail.com</a></h6>
            <h4>Address</h4>
            <h6>Ukraine, Kharkiv</h6>
            <h4>Linkedin</h4>
            <h6><a href="https://www.linkedin.com/in/okelsii-buntikov-131038187"
            >View page LinkedIn</a></h6>
            <h4>GitHub</h4>
            <h6><a target={props.target} href="https://github.com/OleksiiHub?tab=repositories">View page GitHub</a></h6>
            <h3 className="ml-1">Languages</h3>
            <h6>Ukraine - Native</h6>
            <h6>Russian - Native</h6>
            <h6>English - B1</h6>
        </div>
    )
}

export default AboutMe