import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import projectsService from "../../../Services/project.services";

const apiUrl = "http://localhost:5005";

function AddIllustration(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState(""); //Stores the image

  const { id } = useParams();

  const navigate = useNavigate();

  const handleFileUpload = (e) => {

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    projectsService
      .uploadImage(uploadData)
      .then(response => {
        setImageUrl(response.data.fileUrl);

      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      author: id,
      name: name,
      price: price,
      date: date,
      imageUrl: imageUrl,
    };

    projectsService
      .createIllustration(requestBody)
      .then(() => {
        setName("")
        setPrice(0);
        setDate([]);
        setImageUrl("");
        navigate("/user-profile/:id");
        props.refreshIllustrations();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-illustration">
      <h3>Add Artwork</h3>
      <form
        onSubmit={handleSubmit}
        action="/illustration"
        method="post"
        encType="multipart/form-data"
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="number"
          name="year"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="file" name="illustration-image" />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default AddIllustration;
