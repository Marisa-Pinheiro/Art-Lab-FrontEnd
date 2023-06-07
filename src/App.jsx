import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/Home";
import IllustrationList from "./Pages/ListIllustrations";
import IllustrationDetails from "./Pages/IllustrationDetails";
import AddIllustration from "./Pages/AddIllustration";
import SignUpPage from "./Pages/SignUp";
import LogInPage from "./Pages/Login";
import Profile from "./Pages/UserProfile";
import EditIllustration from "./Pages/EditIllustration";
import EditUser from "./Pages/EditUserProfile";
import Cart from "./Pages/Cart";
/* import IsPrivate from "./Components/IsPrivate"; */

//IsAnon pages that can beaccessed by an anonymous user
//Acts like a public page
import IsAnon from "./Components/IsAnon";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/illustration" element={<IllustrationList />} />
          <Route path="/illustration/:id" element={<IllustrationDetails />} />
          <Route path="/illustration/:id/edit" element={<EditIllustration />} />
          <Route
            path="/signup"
            element={
              <IsAnon>
                <SignUpPage />
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                <LogInPage />
              </IsAnon>
            }
          />
          <Route path="/user-profile/:id" element={<Profile />} />
          <Route path="/user-profile/:id/edit" element={<EditUser />} />
          <Route
            path="/user-profile/:id/add-illustration/"
            element={<AddIllustration />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
