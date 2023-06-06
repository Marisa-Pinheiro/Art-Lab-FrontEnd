import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/index";
import HomePage from "./Pages/Home/index";
import IllustrationList from "./Pages/ListIllustrations/index";
import IllustrationDetails from "./Pages/IllustrationDetails/index";
import AddIllustration from "./Pages/AddIllustration/index";
import SignUpPage from "./Pages/SignUp/index";
import LogInPage from "./Pages/Login/index";
import Profile from "./Pages/UserProfile/index";
import EditIllustration from "./Pages/EditIllustration/index"
import EditUser from "./Pages/EditUserProfile";
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
          <Route path="/illustration" element={<IllustrationList/>}/>
          <Route path="/illustration/:id" element={<IllustrationDetails/>}/>
          <Route path="/illustration/:id/edit" element={<EditIllustration/>}/>
          <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
          <Route path="/login" element={<IsAnon><LogInPage/></IsAnon>}/>
          <Route path="/user-profile/:id" element={<Profile/>} />
          <Route path="/user-profile/:id/edit" element = {<EditUser/>}/>
          <Route path="/user-profile/:id/add-illustration/" element={<AddIllustration/>}/>
          {/*<Route path="/illustrations/edit/:illustrationtId" element={<IsAnon><EditProjectPage/>{" "}</IsAnon>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;