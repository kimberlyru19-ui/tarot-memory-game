import React, { useState } from "react";
import tarotcards from "../assets/tarotCards.json";
import "./memory.css";

function SingleCardReveal() {
  const [card, setCard] = useState(null);
  const [showMeaning, setShowMeaning] = useState(false);

  // Card draw function
  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotcards.length);
    const selected = tarotcards[randomIndex];
    setCard(selected);
    setShowMeaning(false);
  };

  const handleCardClick = () => {
    setShowMeaning(true);
  };

  /* button */
  return (
    <div className="card-reveal-container">
      <button className="btn-white-outline" onClick={drawCard}>
        Draw Card
      </button>

         {/* instruction note */}
    <p className="instruction-note">
      After drawing, click on the card to reveal its description.
    </p>


      <div className="card-reveal-row">
        {/* left side card image */}
        <div className="card-side" onClick={handleCardClick}>
          {card ? (
            <img src={card.image} alt={card.name} className="tarot-card-img" />
          ) : (
            <div className="placeholder">Click "Draw Card"</div>
          )}
        </div>

        {/* right side meaning */}
        <div className="card-side meaning-side">
          {showMeaning && card ? (
            <div>
              <h2>{card.name}</h2>
              <p>
                <strong>Upright:</strong> {card.upright}
              </p>
              <p>
                <strong>Reversed:</strong> {card.reversed}
              </p>
            </div>
          ) : (
            <div className="placeholder">
              Click the card to reveal its meaning
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleCardReveal;
