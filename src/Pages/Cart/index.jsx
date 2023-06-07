import { useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context.jsx";

const apiURL = "http://localhost:5005";

function Cart() {
  const [items, setItems] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user);

  const getCartItems = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${user._id}/cart`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setItems(response.data.items);
      console.log("here ", response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      {items === 0 && <p>Your cart is empty</p>}
      {items &&
        items.map((item) => {
          return (
            <div key={item._id}>
              <img src={item.imageUrl}/>
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
