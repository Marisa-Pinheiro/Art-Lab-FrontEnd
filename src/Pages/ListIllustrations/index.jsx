import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context.jsx";
import SearchBar from "../../Components/SearchBar/index.jsx";

import projectsService from "../../../Services/project.services";

function IllustrationList() {
  const [illustrations, setIllustrations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIllustration, setFilteredIllustration] = useState("");

  const { user } = useContext(AuthContext);

  const getSearchIllustrations = () => {
    if (searchQuery !== "") {
      const result = [];

      for (let i = 0; i < illustrations.length; i++) {
        if (
          illustrations[i].name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ) {
          result.push(illustrations[i]);
        }
      }

      setFilteredIllustration(filteredIllustration);
    } else if (searchQuery === "") {
      getAllIllustrations();
    }
  };

  useEffect(() => {
    getSearchIllustrations();
  }, [searchQuery]);

  const getAllIllustrations = () => {
    projectsService
      .getAllIllustrations()
      .then((response) => setIllustrations(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllIllustrations();
  }, []);

  const handleClick = (illustration) => {
    axios
      .post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/cart/${illustration}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickFavs = (illustration) => {
    axios
      .put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/favourites-add/${illustration}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="illustrations-list-page">
      <SearchBar
        illustrations={illustrations}
        setSearchQuery={setSearchQuery}
      />
      {illustrations.length === 0 && <p>There are no illustrations yet!</p>}
      {illustrations.map((illustration) => (
        <div key={illustration._id}>
          <Link to={`/illustration/${illustration._id}`}>
            <img src={illustration.imageUrl} alt="illustration image" />
            <p>
              {illustration.name}, {illustration.date}
            </p>
            <p>{illustration.price}€</p>
          </Link>
          <button onClick={() => handleClick(illustration._id)}>
            Add to cart
          </button>
          <button onClick={() => handleClickFavs(illustration._id)}>
            Add to favourites
          </button>
        </div>
      ))}
    </div>
  );
}

export default IllustrationList;
