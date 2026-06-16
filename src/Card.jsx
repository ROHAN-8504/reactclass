function Card({ image, title, price }) {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        textAlign: "center",
        padding: "15px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          color: "#333",
          height: "50px",
          overflow: "hidden",
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          color: "#28a745",
          margin: "10px 0",
          fontWeight: "bold",
        }}
      >
        ₹{price}
      </h2>

      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;