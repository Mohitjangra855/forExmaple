import React from "react";
import { Link } from "react-router-dom";
function Univers() {
  return (
    <div className="container text-center py-5 border-bottom">
      <h2 className="text-secondary fs-4 my-5 py-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h2>
      <h1 className="text-body-secondary my-5">The Zerodha Universe</h1>
      <p className="text-secondary">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col">
          <div  className="my-5">
            <Link className="text-decoration-none text-secondary" to="#">
              <img
                src="media/smallcaseLogo.png"
                style={{ width: "50%" }}
                alt="image"
              />
              <p className="mt-3">Thematic investment platform</p>
            </Link>
          </div>
          <div className="my-5">
            <Link className="text-decoration-none text-secondary" to="#">
              <img
                src="media/zerodhaFundhouse.png"
                style={{ width: "50%" }}
                alt="image"
              />
              <p className="mt-3">Asset management</p>
            </Link>
          </div>
        </div>
        <div className="col">
          <div  className="my-5">
            <Link className="text-decoration-none text-secondary" to="#">
              <img
                src="media/streakLogo.png"
                style={{ width: "50%" }}
                alt="image"
              />
              <p className="mt-3">Algo & strategy platform</p>
            </Link>
          </div>
          <div className="my-5">
            <Link className="text-decoration-none text-secondary" to="#">
              <img
                src="media/tijori.svg"
                style={{ width: "45%" }}
                alt="image"
              />
              <p className="mt-3">Fundamental research platform</p>
            </Link>
          </div>
        </div>
        <div className="col">
          <div  className="my-5">
            <Link className="text-decoration-none text-secondary" to="#">
              <img
                src="media/sensibullLogo.svg"
                style={{ width: "50%" }}
                alt="image"
              />
              <p className="mt-3">Options trading platform
              </p>
            </Link>
          </div>
          <div className="my-5">
            <Link className="text-decoration-none text-secondary" to="#">
              <img
                src="media/dittoLogo.png"
                style={{ width: "45%" }}
                alt="image"
              />
              <p className="mt-3">Insurance</p>
            </Link>
          </div>
        </div>
      </div>
      <Link className="text-decoration-none" to="/signup">
      <button className='p-2 mb-5 mt-2 btn btn-primary fs-5' style={{ width: "12rem", margin: "0 auto" }}>Sign up now</button>
      </Link>
    </div>
  );
}

export default Univers;
