import axios from "axios"; //LOOK HERE
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddIllustration from "../AddIllustration/index"

const apiURL = "http://localhost:5005";//LOOK HERE

function IllustrationList() {
  const [illustrations, setIllustrations] = useState([]);

  //function that gets projects via axios
  const getAllIllustrations = () => {
    //Route created in backend and tested in Postman
    axios
      .get(`${apiURL}/api/projects`)
      .then((response) => setIllustrations(response.data))
      .catch((error) => console.log(error));
  };

  //Setting a side-effect after initial rendering that is
  //calling getAllProjects function
  useEffect(() => {
    getAllIllustrations();
  }, []);

  return (
    <div className="project-list-page">
        <AddIllustration refreshIllustration={getAllIllustrations}/>
      {illustrations.map((illustration) => {
        return (
            //careful with this id part
          <div className="illustration-card card" key={illustration._id}> 
            <Link to={`/illustrations/${illustration._id}`}>
              <h3>{illustration.title}</h3>
            </Link>
          </div>
        );
      })}
      
    </div>
  );
}

export default IllustrationList;
