import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const apiURL = "http://localhost:5005";

function IllustrationDetails() {
  const [illustration, setIllustration] = useState(null);
  const { illustrationtId } = useParams();

  const getIllustration = () => {
    axios
      .get(`${apiURL}/api/projects/${illustrationtId}`)
      .then((response) => {
        const oneIllustration = response.data;
        setIllustration(oneIllustration);
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
      <Link to={`/illustrations/edit/${illustrationtId}`}>
        <button>Edit Illustration</button>
      </Link>
      <Link to="/illustrations">
        <button>Back to illustrations</button>
      </Link>
    </div>
  );
}

export default IllustrationDetails;
