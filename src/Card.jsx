import "./card.css";

function Card({ image, title, price }) {
  const addToCart = () => {
    alert(`${title} added to cart`);
  };

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h2>₹{price}</h2>

      <button className="cart-btn" onClick={addToCart}>
  Add to Cart
</button>
    </div>
  );
}

export default Card;