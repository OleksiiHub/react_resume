function Nav(props) {
    return (
        <div className="description-style_border">
            <a className="btn description-style_btn mb-1" href="http://localhost:3000/">Resume</a>
            <a className="btn description-style_btn mb-1" href="http://localhost:3000/">React Weather App</a>
            <a className="btn description-style_btn mb-1" href={props.resume} download>Download Resume</a>
        </div>
    )

}

export default Nav