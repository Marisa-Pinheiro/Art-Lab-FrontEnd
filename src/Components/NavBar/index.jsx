import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="app-logo">
        <Link to="/">
          <img src="/Images/logoartlab.png" alt="logo" />
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/illustration" className="illustration-link">
          Illustrations
        </Link>
      </div>

      {isLoggedIn ? (
        <div className="loggedIn">
          <button className="navbar-button" onClick={logOutUser}>Logout</button>
          {user && (
            <Link to={`/user-profile/${user._id}`} className="nav_link">
              User
            </Link>
          )}
          <Link to={"/cart"} className="nav_link">
            Cart
          </Link>
        </div>
      ) : (
        <div className="loggedOut">
          <Link to="/signup">
            <button className="navbar-button">Signup</button>
          </Link>
          <Link to="/login">
            <button className="navbar-button">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
