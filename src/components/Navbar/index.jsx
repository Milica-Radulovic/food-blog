import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="post">Post Page</Link>
        </li>
        <li>
          <Search search={search} setSearch={setSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
