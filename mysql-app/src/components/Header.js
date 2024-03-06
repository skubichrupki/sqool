import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src="/logo.jpg" alt="logo" />
            <p>SQooL - React JS, PHP, MySQL - CRUD Operations</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user/ListUser">Select User</Link>
                    </li>
                    <li>
                        <Link to="/user/CreateUser">Create User</Link>
                    </li>
                    <li>
                        <Link to="/user/1/EditUser">Update User</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;