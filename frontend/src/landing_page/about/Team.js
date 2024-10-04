import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container my-5 py-5">
      <div className="row my-5 py-5">
        <div className="col text-center">
          <img
            src="media/nithinKamath.jpg"
            className="rounded-circle"
            style={{ width: "50%" }}
            alt="People_image"
          />
          <h3 className="text-body-secondary my-4">Nithin Kamath</h3>
          <p className="text-secondary">Founder, CEO</p>
        </div>
        <div className="col">
          <h1 className="mb-5">People</h1>
          <p className="fs-5 text-secondary">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed th e landscape of the Indian broking industry.
          </p>

          <p className="fs-5 text-secondary">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Dat a Advisory Committee (MDAC).
          </p>

          <p className="fs-5 text-secondary">Playing basketball is his zen.</p>

          <p className="fs-5 text-secondary">
            Connect on <Link to="/" className="text-decoration-none">HomePage</Link> / <Link to="/" className="text-decoration-none">TradingQnA</Link> / <Link to="/" className="text-decoration-none">Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
