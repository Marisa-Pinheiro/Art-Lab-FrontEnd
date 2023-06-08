import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context.jsx";

function Favourites() {
  const [favourites, setFavourite] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user);

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

  //LACKS THE REMOVE, INSPIRED BY THE CART ONE

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div>
      {favourites === 0 && <p>Still no favourites?</p>}
      {favourites &&
        favourites.map((favourite) => {
          return (
            <div key={favourite._id}>
              <img src={favourite.imageUrl} />
              <div>
                <p>
                  {favourite.name}, {item.date}€
                </p>
              </div>
            </div>
          );
        })}
      <button>Remove</button> {/* not finished */}
    </div>
  );
}

export default Favourites;
