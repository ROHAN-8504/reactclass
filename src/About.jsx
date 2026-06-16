function About() {
  const aboutCards = [
    {
      title: "Quality Products",
      description: "We choose useful products that are built to last and easy to enjoy.",
    },
    {
      title: "Best Prices",
      description: "Our collection focuses on good value without compromising on quality.",
    },
    {
      title: "Customer Support",
      description: "We help customers find the right products and shop with confidence.",
    },
  ];

  return (
    <>
      <section style={{ padding: "30px 20px" }}>
        <h1>About</h1>
        <p>
          This is the website where you can find products with the best quality.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {aboutCards.map((card) => {
            return (
              <div
                key={card.title}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  padding: "24px",
                  width: "280px",
                  textAlign: "center",
                }}
              >
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default About
