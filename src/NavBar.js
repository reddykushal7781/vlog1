import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articlelist</Link>
                </li>
                <li>
                    <Link to="/articles/:articleId">Articles</Link>
                </li>
                <li>
                    <Link to="*">Error</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;