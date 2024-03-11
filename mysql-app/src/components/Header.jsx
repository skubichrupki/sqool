import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
                <Link to="/">
                    <img src="/logo.jpg" alt="logo" />
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
                            <Link to="/user/SelectUser">
                                List User
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/CreateUser">
                                Create User
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/UpdateUser/1">
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