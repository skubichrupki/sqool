import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className='content'>
            <div>
                <Link to="/">
                    <img src="/logo_dark.jpg" alt="logo" />
                </Link>
            </div>
            <div>
                <nav>
                    <ul className='boxxy'>
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
            </div>
        </header>
    );
}

export default Header;