import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
 console.log(id)
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

  useEffect(() => {
    getUser();
  }, []);

  return <div>{user && <p>{user.username}</p>}</div>;
}

export default Profile;
