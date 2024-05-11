import {Link} from 'react-router-dom';

function Header({ port, database, togglePort }) {
    return (
        <header>
            <nav>
                <ul>
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