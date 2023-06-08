import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

function Favourites() {
  const [favourites, setFavourite] = useState([]);
  const { user } = useContext(AuthContext);

  const getFavourites = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/favourites/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setFavourite(response.data.favourites);
      console.log("here", response.data.favourites);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div>
      {favourites.length === 0 && <p>Still no favourites?</p>}
      {favourites &&
        favourites.map((fav) => (
          <div key={fav._id}>
            <div className="remove-button">
              <button>Remove</button>
            </div>
            <img src={fav.imageUrl} alt={fav.name} />
            <div>
              <p>
                {fav.name}, {fav.price}€
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Favourites;
