import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth.context.jsx";
import authService from "../../../Services/auth.service.jsx";

/* Set up firebase */
/* import firebase from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const auth = firebase.auth(); */
/* End set up */

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  /* Firebase */
  /* const [user] = useAuthState(auth);
  console.log(user);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
  }; */
  /* End */

  const navigate = useNavigate();

  //destructuring the authContext Object
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  /* Saving social login info into DB */
  /* const handleSocialAuth = async () => {
    const body = {
      username: user.displayName,
      email: user.email,
      password: user.uid,
    };
    //route in backend - check
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/signup`,
      body
    );
    setToken(response.authToken);
    authenticateUser();
    navigate("/");
  };

  useEffect(() => {
    handleSocialAuth();
  }, [user]); */
  /* End social login */

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //if ypu submit something on react you have to requestbody
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        //authenticate user
        authenticateUser();
        navigate(`/`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <br></br>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Firebase */}
      {/* <p onClick={signInWithGoogle}>Sign in with Google</p>
      <p onClick={signInWithGitHub}>Sign in with Github</p>
      <p onClick={() => auth.signOut()}>Logout</p>
      {user ? <p>You are logged in </p> : <p>You are logged out</p>} */}
      {/* Firebase */}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LogInPage;
