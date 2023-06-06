/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const apiURL = 'http://localhost:5005'

function Profile() {
  const [user, setUser] = useState(null);

  
  const { id } = useParams();
  console.log(id);
  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`
      );
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user && (
        <div className="user-info">
          <h1>{user.username} Illustration List</h1>
        </div>
      )}
      <Link to="/add-illustration" className="illustration-link">
          <p>Add Illustrations</p>
      </Link>

    </div>
  );
}

export default Profile; */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const apiURL = "http://localhost:5005";

function Profile() {
  const [user, setUser] = useState(null);
  const [userId, setId] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        let response = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`
        );
        setUser(response.data);
        setId(id)
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [id]);

  return (
    <div>
      {user && (
        <div className="user-info">
          <h1>{user.username} Illustration List</h1>
        </div>
      )}
      <Link to={`/user-profile/${id}/edit`} className="edit-profile">
        Edit your Profile
      </Link>

      <Link to={`/user-profile/${id}/add-illustration/`}  className="illustration-link">
        <p>Add Illustrations</p>
      </Link>
    </div>
  );
}


export default Profile;
