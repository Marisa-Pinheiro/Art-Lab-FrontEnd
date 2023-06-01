import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";
/* import Profile from "../../Pages/UserProfile/index" */

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="app-logo">
        <Link to="/">
          <img src="../../public/Images/LogoArtLab.png" alt="logo" />
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/illustrations" className="illustration-link">
          Illustrations
        </Link>
      </div>

      {isLoggedIn ? (
        <div className="loggedIn">
          <button className="logout" onClick={logOutUser}>
            Logout
          </button>
          {user && (
            <Link to={`/user-profile/${user._id}`} className="nav_link">
              User
            </Link>
          )}
        </div>
      ) : (
        <div className="loggedOut">
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
