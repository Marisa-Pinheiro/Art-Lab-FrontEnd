import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import projectsService from "../../../Services/project.services";

function IllustrationList() {
  const [illustrations, setIllustrations] = useState([]);
  const [selectedIllustrations, setSelectedIllustrations] = useState([]);

  const getAllIllustrations = () => {
    projectsService
      .getAllIllustrations()
      .then((response) => setIllustrations(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllIllustrations();
  }, []);

  const addToCart = (illustration) => {
    setSelectedIllustrations((prevSelected) => [...prevSelected, illustration]);
  };

  return (
    <div className="illustrations-list-page">
      {illustrations.length === 0 && <p>There are no illustrations yet!</p>}
      {illustrations.map((illustration) => (
        <div key={illustration._id}>
          <Link to={`/illustration/${illustration._id}`}>
            <img src={illustration.imageUrl} alt="illustration image" />
          </Link>
          <button onClick={() => addToCart(illustration)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default IllustrationList;

