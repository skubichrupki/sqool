import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Header() {

    
    return (
        <header>
            <div>
                <Link to="/">
                    <img id="headerimg" src="/logo_setag.png" alt="logo" />
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
                    <li>
                        <Link to="/Login">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='icons'>
              
            </div>
        </header>
    );
}

export default Header;