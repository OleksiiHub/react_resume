function AboutMe(props) {
    return (
        <div className="about-style theme-color_backgroud">
            <h1>Oleksii Buntikov</h1>
            <img className="about-style_img" src={props.src} alt={props.alt} />
            <h3 className="ml-1">Contact</h3>
            <h4>Phone</h4>
            <h5><a href="tel:+74951111111">+38 (006) 007-57-37</a></h5>
            <h4>E-mail</h4>
            <h5><a href="mailto:githubbai@gmail.com">githubbai@gmail.com</a></h5>
            <h4>Linkedin</h4>
            <h5><a href="https://www.linkedin.com/in/okelsii-buntikov-131038187"
            >View page LinkedIn</a></h5>
            <h4>GitHub</h4>
            <h5><a target={props.target} href="https://github.com/OleksiiHub?tab=repositories">View page GitHub</a></h5>
            <h4>Address</h4>
            <h5><a target={props.target} href="https://www.google.com/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@49.9945914,36.2858247,11z/data=!3m1!4b1!4m6!3m5!1s0x4127a09f63ab0f8b:0x2d4c18681aa4be0a!8m2!3d49.9935!4d36.230383!16zL20vMDgyc3k5?entry=ttu">Ukraine, Kharkiv</a></h5>
            <h3 className="ml-1">Languages</h3>
            <h5>Ukraine - Native</h5>
            <h5>Russian - Native</h5>
            <h5>English - B1</h5>
        </div>
    )
}

export default AboutMe