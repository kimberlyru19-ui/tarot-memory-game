import React, { useState } from 'react';
import tarotcards from '../assets/tarotCards.json';
import './threecard.css';

function Reading3() {
  const [reading, setReading] = useState(null);

  // Shuffle deck function
  function shuffleDeck(deck) {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function drawthreecards(deck) {
    const shuffled = shuffleDeck(deck);

    /* assign random orientation */
    const assignOrientation = (card) => ({
      ...card,
      isReversed: Math.random() < 0.5,
    });

    return {
      past: assignOrientation(shuffled[0]),
      present: assignOrientation(shuffled[1]),
      future: assignOrientation(shuffled[2]),
    };
  }

  const handleDraw = () => {
    const drawn = drawthreecards(tarotcards);
    setReading(drawn);
    console.log("Your reading:", drawn);
  };

  return (
    <div className="card-row3">
      <button className="btn-white-outline" onClick={handleDraw}>
        Draw Cards
      </button>

      {/* past */}
      <div className="card">
        {reading ? (
          <>
            <img
              src={reading.past.image}
              alt={reading.past.name}
              className={`tarot-card-img ${reading.past.isReversed ? "reversed" : ""}`}
            />
            <h3 className="card-name">
              {reading.past.name}
              {reading.past.isReversed && " (Reversed)"}
            </h3>
            <p className="card-meaning">
              {reading.past.isReversed ? reading.past.reversed : reading.past.upright}
            </p>
          </>
        ) : (
          <img src="/images/past.png" alt="Placeholder Past" className="tarot-card-img" />
        )}
      </div>

      {/* Present */}
      <div className="card">
        {reading ? (
          <>
            <img
              src={reading.present.image}
              alt={reading.present.name}
              className={`tarot-card-img ${reading.present.isReversed ? "reversed" : ""}`}
            />
            <h3 className="card-name">
              {reading.present.name}
              {reading.present.isReversed && " (Reversed)"}
            </h3>
            <p className="card-meaning">
              {reading.present.isReversed ? reading.present.reversed : reading.present.upright}
            </p>
          </>
        ) : (
          <img src="/images/present.png" alt="Placeholder Present" className="tarot-card-img" />
        )}
      </div>

      {/* Future */}
      <div className="card">
        {reading ? (
          <>
            <img
              src={reading.future.image}
              alt={reading.future.name}
              className={`tarot-card-img ${reading.future.isReversed ? "reversed" : ""}`}
            />
            <h3 className="card-name">
              {reading.future.name}
              {reading.future.isReversed && " (Reversed)"}
            </h3>
            <p className="card-meaning">
              {reading.future.isReversed ? reading.future.reversed : reading.future.upright}
            </p>
          </>
        ) : (
          <img src="/images/future.png" alt="Placeholder Future" className="tarot-card-img" />
        )}
      </div>
    </div>
  );
}

export default Reading3;