import selectedIllustrations from "../ListIllustrations/index"

function Cart({ setSelectedIllustrations }) {
  return (
    <div>
      <h2>Cart</h2>
      {selectedIllustrations.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {selectedIllustrations.map((illustration) => (
            <li key={illustration._id}>
              <img src={illustration.imageUrl} alt="illustration image" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
