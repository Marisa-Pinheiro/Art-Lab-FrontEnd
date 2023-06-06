import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const apiURL = "http://localhost:5005";

function IllustrationDetails() {
  const [illustration, setIllustration] = useState(null);
  const { id } = useParams();

  const getIllustration = () => {
    axios
      .get(`${apiURL}/api/illustration/${id}`)
      .then((response) => {
        const oneIllustration = response.data;
        setIllustration(oneIllustration);
        console.log(oneIllustration)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getIllustration();
  }, []);

  return (
    <div className="illustration-details">
      {illustration && (
        <div>
          {illustration.img}
          <h1>{illustration.name}</h1>
          <p>{illustration.timeOfCreation}</p>
          <p>{illustration.timeOfCreation}</p>
        </div>
      )}
      <Link to={`/illustration/${id}/edit`}>
        <button>Edit Illustration</button>
      </Link>
      <Link to="/illustration">
        <button>Back to illustrations</button>
      </Link>
    </div>
  );
}

export default IllustrationDetails;
