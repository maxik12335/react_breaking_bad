function Header() {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo">Во все тяжкие</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://www.breakingbadapi.com/" target='_blank' className="header__link">API</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }