import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function EditIllustration() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(0);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`)
      .then((response) => {
        const oneIllustration = response.data;
        setName(oneIllustration.name);
        setPrice(oneIllustration.price);
        setDate(oneIllustration.date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, price, date };

    axios
      .put(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`, requestBody)
      .then((response) => {
        navigate(`/illustration/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteIllustration = () => {
    axios
      .delete(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`)
      .then(() => {
        navigate("/illustration");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Edit your illustration!</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Date</label>
        <input
          type="number"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Edit</button>
      </form>
      <Link to={`/illustration/${id}`}>
  <button onClick={deleteIllustration}>Delete your illustration?</button>
</Link>

    </div>
  );
}

export default EditIllustration;
