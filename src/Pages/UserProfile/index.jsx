import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(0);
  
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name:name , price:price, date:date };

    axios
      .post(`${apiURL}/user-profile/${id}`, requestBody)
      .then((response) => {
        setName("");
        setPrice(0);
        setDate(0);
        props.addIllustrations();
      })
      .catch((error) => console.log(error));
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
      
       <form action="/illustrations" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
        <p>Author: {id}</p>
        <label>
          Name:
          <input type="text" name="name" class="form-control" value={name}
          onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Date:
          <input type="number" name="year" class="form-control" value={date}
          onChange={(e) => setDate(e.target.value)}/>
        </label>
        <label>
          Price:
          <input type="number" name="price" class="form-control" value={price}
          onChange={(e) => setPrice(e.target.value)}/>
        </label>
        <input type="file" name="illustration-image" />
        <button type="submit">Submit</button>
      </form>
   )}
     
    </div>
  );
}

export default Profile;
