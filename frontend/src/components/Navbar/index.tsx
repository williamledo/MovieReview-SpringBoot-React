import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="wlmovie-nav-content">
                    <h1>Movie Review</h1>
                    <a href="https://github.com/williamledo">
                        <div className="wlmovie-contact-container">
                            <GithubIcon />
                            <p className="wlmovie-contact-link">/williamledo</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>);

}

export default Navbar;