import "./tenCard.css";
import tarotcards from "../assets/tarotCards.json";
import React, { useState, useRef, useEffect } from "react";

function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/* draw ten cards function */
function drawTenCards(deck) {
  const shuffled = shuffleDeck(deck);

  const assignOrientation = (card) => ({
    ...card,
    isReversed: Math.random() < 0.5,
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

function TenCards() {
  const challenge = true; /* challenge card toggle */

  const [reading, setReading] = useState(null);

  const [challengePosition, setChallengePosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const situationRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (reading && situationRef.current && !isMobile) {
      const rect = situationRef.current.getBoundingClientRect();

      setChallengePosition({
        x: rect.left + rect.width / 2 - 100,
        y: rect.top + rect.height / 2 - 100,
      });
    }
  }, [reading, isMobile]);

  const handleDragStart = (e) => {
    if (isMobile) return;

    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDragging(true);
  };

  const handleDrag = (e) => {
    if (!dragging || isMobile) return;
    if (e.clientX === 0 && e.clientY === 0) return;

    setChallengePosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDraw = () => {
    const drawn = drawTenCards(tarotcards);
    setReading(drawn);
  };

  const cardImg = (card, placeholder) => (
    <img
      src={reading ? card.image : placeholder}
      alt={reading ? card.name : ""}
      className={`tarot-card-img ${reading && card.isReversed ? "reversed" : ""}`}
    />
  );

  return (
    <div className="card-table">
      <div className="two-column">

        {/* left side */}
        <div className="left-pane">
          <ol className="reading-list">
            <li className="button-item">
              <div className="button-wrapper">
                <button className="btn-white-outline" onClick={handleDraw}>
                  Draw Cards
                </button>
              </div>
            </li>

            {[
              "situation",
              "challenge",
              "focus",
              "recent_past",
              "possibilities",
              "near_future",
              "power",
              "environment",
              "hopes",
              "outcome",
            ].map((key) => (
              <li key={key}>
                <strong>{key.replace("_", " ").replace("_", " ")}</strong>
                {reading && (
                  <>
                    {" — "}
                    {reading[key].name}
                    {reading[key].isReversed && " (Reversed)"}
                    (
                    {reading[key].isReversed
                      ? reading[key].reversed
                      : reading[key].upright}
                    )
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* right side */}
        <div className="right-pane">

          {/* mobile version */}
          {isMobile && reading && (
            <div className="mobile-column">

              <div className="card">{cardImg(reading.situation, "/images/situation.png")}</div>

              <div className="card">
                <img
                  src={reading.challenge.image}
                  alt={reading.challenge.name}
                  className={`tarot-card-img ${reading.challenge.isReversed ? "reversed" : ""}`}
                />
              </div>

              <div className="card">{cardImg(reading.focus, "/images/focus.png")}</div>
              <div className="card">{cardImg(reading.recent_past, "/images/recent_past.png")}</div>
              <div className="card">{cardImg(reading.possibilities, "/images/possibilities.png")}</div>
              <div className="card">{cardImg(reading.near_future, "/images/near_future.png")}</div>
              <div className="card">{cardImg(reading.power, "/images/power.png")}</div>
              <div className="card">{cardImg(reading.environment, "/images/environment.png")}</div>
              <div className="card">{cardImg(reading.hopes, "/images/hopes.png")}</div>
              <div className="card">{cardImg(reading.outcome, "/images/outcome.png")}</div>

            </div>
          )}

          {!isMobile && (
            <div className="card-layout">
              <div className="card-column left-column">

                {/* Focus */}
                <div className="card-row">
                  <div className="card">
                    {reading ? (
                      <img
                        src={reading.focus.image}
                        alt={reading.focus.name}
                        className={reading.focus.isReversed ? "reversed" : ""}
                      />
                    ) : (
                      <img src="/images/focus.png" alt="Placeholder Focus" />
                    )}
                  </div>
                </div>

                {/* middle row */}
                <div className="card-row middle-row">

                  <div className="card">
                    {reading ? (
                      <img
                        src={reading.possibilities.image}
                        alt={reading.possibilities.name}
                        className={reading.possibilities.isReversed ? "reversed" : ""}
                      />
                    ) : (
                      <img src="/images/possibilities.png" alt="Possibilities" />
                    )}
                  </div>

                  <div className="card situation-card" ref={situationRef}>
                    {reading ? (
                      <img
                        src={reading.situation.image}
                        alt={reading.situation.name}
                        className={reading.situation.isReversed ? "reversed" : ""}
                      />
                    ) : (
                      <img src="/images/situation.png" alt="Situation" />
                    )}
                  </div>

                  {challenge && reading && (
                    <img
                      src={reading.challenge.image}
                      alt={reading.challenge.name}
                      draggable
                      onDragStart={handleDragStart}
                      onDrag={handleDrag}
                      onDragEnd={handleDragEnd}
                      className={`challenge-card challenge-draggable ${
                        reading.challenge.isReversed ? "reversed" : ""
                      }`}
                      style={{
                        position: "absolute",
                        left: challengePosition.x,
                        top: challengePosition.y,
                        transform: "rotate(90deg)",
                        zIndex: 9999,
                      }}
                    />
                  )}

                  <div className="card">
                    {reading ? (
                      <img
                        src={reading.near_future.image}
                        alt={reading.near_future.name}
                        className={reading.near_future.isReversed ? "reversed" : ""}
                      />
                    ) : (
                      <img src="/images/near_future.png" alt="Near Future" />
                    )}
                  </div>

                </div>

                <div className="card-row">
                  <div className="card">
                    {reading ? (
                      <img
                        src={reading.recent_past.image}
                        alt={reading.recent_past.name}
                        className={reading.recent_past.isReversed ? "reversed" : ""}
                      />
                    ) : (
                      <img src="/images/recent_past.png" alt="Recent Past" />
                    )}
                  </div>
                </div>

              </div>

              <div className="card-column right-column">

                <div className="card">
                  {reading ? (
                    <img
                      src={reading.power.image}
                      alt={reading.power.name}
                      className={reading.power.isReversed ? "reversed" : ""}
                    />
                  ) : (
                    <img src="/images/power.png" alt="Power" />
                  )}
                </div>

                <div className="card">
                  {reading ? (
                    <img
                      src={reading.environment.image}
                      alt={reading.environment.name}
                      className={reading.environment.isReversed ? "reversed" : ""}
                    />
                  ) : (
                    <img src="/images/environment.png" alt="Environment" />
                  )}
                </div>

                <div className="card">
                  {reading ? (
                    <img
                      src={reading.hopes.image}
                      alt={reading.hopes.name}
                      className={reading.hopes.isReversed ? "reversed" : ""}
                    />
                  ) : (
                    <img src="/images/hopes.png" alt="Hopes" />
                  )}
                </div>

                <div className="card">
                  {reading ? (
                    <img
                      src={reading.outcome.image}
                      alt={reading.outcome.name}
                      className={reading.outcome.isReversed ? "reversed" : ""}
                    />
                  ) : (
                    <img src="/images/outcome.png" alt="Outcome" />
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default TenCards;
