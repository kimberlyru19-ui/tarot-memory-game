import React, { useState } from "react";
import "./tenCard.css";
import tarotcards from "../assets/tarotCards.json";

// shuffle deck function
function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function drawTenCards2(deck) {
  const shuffled = shuffleDeck(deck);

  const assignOrientation = (card) => ({
    ...card,
    reversed: Math.random() < 0.5,
  });

  return {
    situation: assignOrientation(shuffled[0]),
    challenge: assignOrientation(shuffled[1]),
    focus: assignOrientation(shuffled[2]),
    recent_past: assignOrientation(shuffled[3]),
    possibilities: assignOrientation(shuffled[4]),
    near_future: assignOrientation(shuffled[5]),
    power: assignOrientation(shuffled[6]),
    environment: assignOrientation(shuffled[7]),
    hopes: assignOrientation(shuffled[8]),
    outcome: assignOrientation(shuffled[9]),
  };
}

function TenCards2() {
  const challenge = true;
  const [reading, setReading] = useState(null);

  const handleDraw = () => {
    const drawn = drawTenCards2(tarotcards);
    setReading(drawn);
    console.log("Your reading:", drawn);
  };

  return (
    <div>
      <button className="btn btn-purple mb-4" onClick={handleDraw}>
        🔮 Draw Cards
      </button>

      <div className="card-row">
        {/* css left column */}
        <div className="card-column left-column">
          {/* Focus */}
          <div className="card-row2">
            <div className="card">
              {reading ? (
                <img
                  src={reading.focus.image}
                  alt={reading.focus.name}
                  className={reading.focus.reversed ? "reversed" : ""}
                />
              ) : (
                <img src="/images/focus.png" alt="Placeholder Focus" />
              )}
            </div>
          </div>

          {/* middle row */}
          <div className="card-row middle-row2">
            {/* possibilities */}
            <div className="card">
              {reading ? (
                <img
                  src={reading.possibilities.image}
                  alt={reading.possibilities.name}
                  className={reading.possibilities.reversed ? "reversed" : ""}
                />
              ) : (
                <img src="/images/possibilities.png" alt="Possibilities" />
              )}
            </div>

            {/* situation + challenge */}
            <div className="card">
              <div className="card situation-card">
                {reading ? (
                  <img
                    src={reading.situation.image}
                    alt={reading.situation.name}
                    className={reading.situation.reversed ? "reversed" : ""}
                  />
                ) : (
                  <img src="/images/situation.png" alt="Situation" />
                )}

                {challenge &&
                  (reading ? (
                    <img
                      src={reading.challenge.image}
                      alt={reading.challenge.name}
                      className={`challenge-card ${
                        reading.challenge.reversed ? "reversed" : ""
                      }`}
                    />
                  ) : (
                    <img
                      src="/images/challenge.png"
                      alt="Challenge"
                      className="challenge-card"
                    />
                  ))}
              </div>
            </div>

            {/* future */}
            <div className="card">
              {reading ? (
                <img
                  src={reading.near_future.image}
                  alt={reading.near_future.name}
                  className={reading.near_future.reversed ? "reversed" : ""}
                />
              ) : (
                <img src="/images/near_future.png" alt="Near Future" />
              )}
            </div>
          </div>

          {/* Recent Past */}
          <div className="card-row2">
            <div className="card">
              {reading ? (
                <img
                  src={reading.recent_past.image}
                  alt={reading.recent_past.name}
                  className={reading.recent_past.reversed ? "reversed" : ""}
                />
              ) : (
                <img src="/images/recent_past.png" alt="Recent Past" />
              )}
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="card-column right-column">
          {/* power */}
          <div className="card">
            {reading ? (
              <img
                src={reading.power.image}
                alt={reading.power.name}
                className={reading.power.reversed ? "reversed" : ""}
              />
            ) : (
              <img src="/images/power.png" alt="Power" />
            )}
          </div>

          {/* environment */}
          <div className="card">
            {reading ? (
              <img
                src={reading.environment.image}
                alt={reading.environment.name}
                className={reading.environment.reversed ? "reversed" : ""}
              />
            ) : (
              <img src="/images/environment.png" alt="Environment" />
            )}
          </div>

          {/* hopes */}
          <div className="card">
            {reading ? (
              <img
                src={reading.hopes.image}
                alt={reading.hopes.name}
                className={reading.hopes.reversed ? "reversed" : ""}
              />
            ) : (
              <img src="/images/hopes.png" alt="Hopes" />
            )}
          </div>

          {/* outcome */}
          <div className="card">
            {reading ? (
              <img
                src={reading.outcome.image}
                alt={reading.outcome.name}
                className={reading.outcome.reversed ? "reversed" : ""}
              />
            ) : (
              <img src="/images/outcome.png" alt="Outcome" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenCards2;
