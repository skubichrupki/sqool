import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="/logo_light.jpg" alt="logo" />
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
                            List User
                        </Link>
                    </li>
                    <li>
                        <Link to="/CreateUser">
                            Create User
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/UpdateUser/1">
                            Update User
                        </Link>
                    </li> */}
                </ul>
            </nav>
            <div>
                <Link to="/">
                    git
                </Link>
                <Link to="/">
                    li
                </Link>
            </div>
        </header>
    );
}

export default Header;