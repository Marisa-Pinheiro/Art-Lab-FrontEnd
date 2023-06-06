import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import projectsService from '../../../Services/project.services';

function IllustrationList() {
  const [illustrations, setIllustrations] = useState([]);

  const getAllIllustrations = () => {
    projectsService.getAllIllustrations()
    .then((response)=> setIllustrations(response.data))
    .catch((error)=>console.log(error));
  };

  useEffect(() => {
    getAllIllustrations();
  }, []);

  return (
    <div className="illustrations-list-page">
      {illustrations.map((illustration) => {
        if (illustrations.length === 0){
          return (<p>There are no illustrations yet!</p>)
        }
        else
        return (
          <div > {/*className="illustration-card card" key={illustration._id}*/}
            <Link to={`/illustration/${illustration._id}`}>
              <img src={illustration.imageUrl} alt='illustration image' />
            </Link>
          </div>
        );
      })}
      
    </div>
  );
}

export default IllustrationList;
