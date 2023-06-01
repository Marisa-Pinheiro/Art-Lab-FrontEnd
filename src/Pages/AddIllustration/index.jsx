import { useState } from "react";

//Careful with this axios, page almost done
import axios from "axios";

const apiURL = "http://localhost:5005";

function AddIllustration(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name: name, price: price, date: date };

    axios
      .post(`${apiURL}/api/projects`, requestBody)
      .then((response) => {
        setName("");
        setPrice(0);
        setDate([]);
        props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-project">
      <h3>Add Artwork</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Price:</label>
        <textarea
          type="number"
          name="price"
          value={price}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Date:</label>
        <textarea
          type="number" //TO LOOK AT THIS AGAIN
          name="date"
          value={date}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddIllustration;
