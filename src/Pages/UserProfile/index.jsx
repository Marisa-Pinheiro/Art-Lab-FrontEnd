import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {user && (
        <div className="user-info">
          <h1>{user.username} Illustration List</h1>
        </div>
      
       <form action="/illustrations" method="post" enctype="multipart/form-data">
        <p>Author: {id}</p>
        <label>
          Name:
          <input type="text" name="name" class="form-control" />
        </label>
        <label>
          Date:
          <input type="number" name="year" class="form-control" />
        </label>
        <label>
          Price:
          <input type="number" name="price" class="form-control" />
        </label>
        <input type="file" name="illustration-image" />
      </form>
   )}
     
    </div>
  );
}

export default Profile;
