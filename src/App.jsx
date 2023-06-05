import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/index";
import HomePage from "./Pages/Home/index";
import IllustrationList from "./Pages/ListIllustrations/index";
import IllustrationDetails from "./Pages/ArtworkDetails/index";
import AddIllustration from "./Pages/AddIllustration/index";
import SignUpPage from "./Pages/SignUp/index";
import LogInPage from "./Pages/Login/index";
import Profile from "./Pages/UserProfile/index";
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
          <Route path="/" element={<HomePage/>}/>
          <Route path="/illustrations" element={<IllustrationList/>}/>
          <Route path="/illustrations/:id" element={<IsAnon><IllustrationDetails/></IsAnon>}/>
          <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
          <Route path="/login" element={<IsAnon><LogInPage/></IsAnon>}/>
          <Route path="/user-profile/:id" element={<Profile/>}/>
          <Route path="add-illustration" element={<AddIllustration/>}/>
          {/*<Route path="/illustrations/edit/:illustrationtId" element={<IsAnon><EditProjectPage/>{" "}</IsAnon>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;