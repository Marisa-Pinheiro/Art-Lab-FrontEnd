import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/index";
import HomePage from "./Pages/Home/index";
import IllustrationList from "./Pages/ListIllustrations/index";
import ProjectDetails from "./Pages/ProjectDetailsPage/index";
import AddIllustration from "./Pages/AddIllustration/index";
import SignUpPage from "./Pages/SignUp/index";
import LogInPage from "./Pages/Login/index";
import IsPrivate from "./Components/IsPrivate";

//IsAnon pages that can beaccessed by an anonymous user
//acts like a public page
import IsAnon from "./Components/IsAnon";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <IsPrivate>
              <ProjectsListPage />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <IsPrivate>
              <ProjectDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/edit/:projectId"
          element={
            <IsPrivate>
              <EditProjectPage />{" "}
            </IsPrivate>
          }
        />
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
      </Routes>
    </div>
  );
}

export default App;
