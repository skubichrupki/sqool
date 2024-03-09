import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
                <Link to="/">
                    <img src="/logo.jpg" alt="logo" />
                </Link>
            <div>

                <p>SQooL - React JS, PHP, MySQL - CRUD Operations</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/SelectUser">
                            Select User
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/CreateUser">
                            Create User
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/1/UpdateUser">
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