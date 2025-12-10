import tarotCards from "../assets/tarotCards.json";

// tarot cards with meanings
function Cards() {
  return (
    <div className="container mt-4">
      <h2>Tarot Card Meanings</h2>
      <p>
        Browse all 78 cards with upright and reversed meanings, astrology
        connections, and suit classifications.
      </p>
      <div className="major-arcana">
        <p>
          <strong>Major Arcana</strong>
        </p>
        <p>
          <strong>Purpose</strong> - Represent big life themes, spiritual
          lessons, and turning points.{" "}
        </p>
        <p>
          <strong>Interpretation</strong> - When these appear in a reading, they
          often signal major shifts or deeper soul lessons.{" "}
        </p>
      </div>
      <div className="minor-arcana">
        <p>
          <strong>Minor Arcana</strong>
        </p>
        <p>
          <strong>Purpose</strong> - Reflect everyday experiences, emotions,
          challenges, and practical matters.{" "}
        </p>
        <p>
          <strong>Structure</strong> - Divided into four suits, each with 14
          cards (Ace through 10 + four Court Cards).{" "}
        </p>
      </div>

      <div className="row">
        {tarotCards.map((card, index) => (
          <div key={index} className="col-6 col-md-4 mb-4">
            <div className="card h-100">
              {/* placeholder images */}
              <img
                src={card.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={card.name}
              />

              {/* card details */}
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p>
                  <strong>Arcana:</strong> {card.arcana}
                </p>
                {card.suit && (
                  <p>
                    <strong>Suit:</strong> {card.suit}
                  </p>
                )}
                <p>
                  <strong>Upright:</strong> {card.upright}
                </p>
                <p>
                  <strong>Reversed:</strong> {card.reversed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
