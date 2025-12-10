import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReadingBox.css";

function Reading() {
  const navigate = useNavigate();

  const handleDraw = () => {
    navigate("/reading3");
  };

  const handleClear = () => {
    navigate("/reading10");
  };

  return (
    <div className="container-fluid mt-4">
      <h2>Three-Card Tarot Reading</h2>
      <p>
        Click below to draw your cards for Past, Present, and Future. Each card
        includes meanings from astrology, suits, and arcana.
      </p>

      <div className="reading-box">
        <h3 className="mb-3">Reading</h3>
        <p className="mb-3">
          Use the buttons below to interact with the reading tool.
        </p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary reading-btn" onClick={handleDraw}>
            Three Card Reading
          </button>
          <button
            className="btn btn-secondary reading-btn"
            onClick={handleClear}
          >
            Celtic Cross Reading
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reading;
