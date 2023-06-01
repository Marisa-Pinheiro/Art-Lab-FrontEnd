import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";
/* import Profile from "../../Pages/UserProfile/index" */

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/illustrations">Illustrations</Link>
      </div>

      {isLoggedIn ? (
        <div>
          <button className="loging" onClick={logOutUser}>
            Logout
          </button>
          {user && (
            <Link to={`/user-profile/${user._id}`} className="nav_link">
              User
            </Link>
          )}
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button className="signup">Signup</button>
          </Link>
          <Link to="/login">
            <button className="loging">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
