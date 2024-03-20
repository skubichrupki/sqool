import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Header() {

    
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="/logo_setag.png" alt="logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/SelectUser">
                            List Item
                        </Link>
                    </li>
                    <li>
                        <Link to="/CreateUser">
                            Create Item
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='icons'>
                <a href="https://github.com/skubichrupki" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/michal-skupinski-236040234/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </div>
        </header>
    );
}

export default Header;