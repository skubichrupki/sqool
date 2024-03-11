import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
                <Link to="/">
                    <img src="/logo2.jpg" alt="logo" />
                </Link>
            <div>
                <p>SQooL - React.js, PHP, MariaDB</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/SelectUser">
                                List User
                            </Link>
                        </li>
                        <li>
                            <Link to="/CreateUser">
                                Create User
                            </Link>
                        </li>
                        <li>
                            <Link to="/UpdateUser">
                                Update User
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}

export default Header;