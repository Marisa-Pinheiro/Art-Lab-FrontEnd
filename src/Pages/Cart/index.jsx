import { useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context.jsx";

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
      console.log("here", response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  //NOT FINISHED
  const removeFromCart = (itemId) => {
    axios
      .put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/cart/del/${itemId}`
      )
      .then((response) => {
        setItems(items.filter((item) => item._id !== itemId));
        navigate(`/cart`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {items === 0 && <p>Your cart is empty</p>}
      {items &&
        items.map((item) => {
          return (
            <div key={item._id}>
              <img src={item.imageUrl} />
              <div>
                <p>
                  {item.name}, {item.price}€
                </p>
              </div>
            </div>
          );
        })}
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
}

export default Cart;
