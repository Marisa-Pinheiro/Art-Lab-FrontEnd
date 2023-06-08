import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import projectsService from "../../../Services/project.services";

const apiUrl = "http://localhost:5005";

function AddIllustration(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(0);
  const [imageUrl, setImageUrl] = useState(""); //Stores the image
  const [uploading, setUploading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    setUploading(true);
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/upload`,
        uploadData
      )
      .then((response) => {
        setImageUrl(response.data.fileUrl);
        setUploading(false);
        console.log(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      author: id,
      name,
      price,
      date,
      imageUrl,
    };

    axios
      .post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/illustration`,
        requestBody
      )
      .then(() => {
        setName("");
        setPrice(0);
        setDate(0);
        setImageUrl("");
        navigate(`/user-profile/${id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-illustration">
      <h3>Add Artwork</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="number"
          required
          name="year"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="number"
          required
          name="price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input required type="file" onChange={(e) => handleFileUpload(e)} />
        {uploading ? (
          <p>Image Uploading, please wait</p>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
}

export default AddIllustration;
