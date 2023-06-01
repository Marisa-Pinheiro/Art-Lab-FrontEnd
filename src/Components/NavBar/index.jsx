import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/illustrations">
          <button>Illustrations</button>
        </Link>
      </div>

      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
}

export default NavBar;
