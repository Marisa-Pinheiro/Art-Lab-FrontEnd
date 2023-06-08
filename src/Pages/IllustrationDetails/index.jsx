import axios from "axios";
import { useState, useEffect , useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/auth.context";



function IllustrationDetails() {
  const [illustration, setIllustration] = useState(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const getIllustration = () => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`)
      .then((response) => {
        const oneIllustration = response.data;
        setIllustration(oneIllustration);
        console.log(oneIllustration);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getIllustration();
  }, []);

  return (
    <div className="illustration-details">      
    <Link to="/illustration">
        Back
      </Link>
      {illustration && (
        <div>
          <img src={illustration.imageUrl} alt="illustration image" />
          <h1>{illustration.name} - {illustration.date}</h1>
          <p>{illustration.author}</p>
          <p>{illustration.price}€</p>
          
        </div>
      )}
      {illustration && illustration.author === user._id &&
      <Link to={`/illustration/${id}/edit`}><button>Edit Illustration</button></Link>}

    </div>
  );
}

export default IllustrationDetails;
