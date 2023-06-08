import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

import { FaSearch } from "react-icons/fa";
import { Divider, Input } from "antd";

import projectsService from "../../../Services/project.services";

function IllustrationList() {
  const [illustrations, setIllustrations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIllustration, setFilteredIllustration] = useState([]);

  const { user } = useContext(AuthContext);

 const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    const filter = [];

        illustrations.map((illustration) => {
          if (
            illustration.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            illustration.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            filter.push(illustration);
          }
        });
      setFilteredIllustration(filter);
      console.log(searchQuery)
  }; 

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
      <Divider>
        <FaSearch />
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search illustrations..."
        />
      </Divider>
      {illustrations.length === 0 && <p>There are no illustrations yet!</p>}
      {illustrations.map((illustration) => {
        if (
          searchQuery.trim() === "" ||
          illustration.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          illustration.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return (
            <div key={illustration._id}>
              <Link to={`/illustration/${illustration._id}`}>
                <img src={illustration.imageUrl} alt="Illustration Image" />
                <p>
                  {illustration.name}, {illustration.date}
                </p>
                <p>{illustration.price}€</p>
              </Link>
              <button onClick={() => handleClick(illustration._id)}>
                Add to cart
              </button>
              <button onClick={() => handleClickFavs(illustration._id)}>
              ♥
              </button>
            </div>
          );
        }
        return null; // Hide illustrations that don't match the search query
      })}
    </div>
  );
    } 
export default IllustrationList;
