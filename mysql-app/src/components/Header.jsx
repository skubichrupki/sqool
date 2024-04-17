import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
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
        </header>
    );
}

export default Header;