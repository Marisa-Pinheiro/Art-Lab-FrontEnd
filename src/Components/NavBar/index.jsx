import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-link">
        <Link to="/">
          Home
        </Link>
        <Link to="/illustrations">
          Illustrations
        </Link>
      </div>

      <Link to="/signup">
        <button className="signup">Signup</button>
      </Link>
      <Link to="/login">
        <button className="loging">Login</button>
      </Link>
    </nav>
  );
}

export default NavBar;
