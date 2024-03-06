import {Link} from 'react-router-dom';

function Navigation() {
    return (
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
    );
}

export default Navigation;