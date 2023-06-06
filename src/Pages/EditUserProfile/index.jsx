import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const apiURL = "http://localhost:5005";

function EditUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiURL}/api/user-profile/${id}`)
      .then((response) => {
        const oneUser = response.data;
        setUsername(oneUser.username);
        setPassword(oneUser.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { username, password };

    axios
      .put(`${apiURL}/api/user-profile/${id}`, requestBody)
      .then((response) => {
        navigate(`/user-profile/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = () => {
    axios
      .delete(`${apiURL}/api/user-profile/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Edit your profile</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <textarea
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Edit</button>
      </form>

      <button onClick={deleteUser}>Delete your profile?</button>
    </div>
  );
}

export default EditUser;
