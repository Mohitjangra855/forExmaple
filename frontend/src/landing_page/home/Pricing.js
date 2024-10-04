import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-5">
          <h1 className="fs-3">Unbeatable pricing</h1>
          <p className="fs-5 text-secondary">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="fs-5" style={{textDecoration:"none",textAlign:"center"}}>
            See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-7 p-4">
          <div className="row">
            <div className="col text-center">
              <h1 className="text-warning">
                <sup>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                </sup>
                0
              </h1>
              <p className="6">Free account opening</p>
            </div>
            <div className="col text-center">
              <h1 className="text-warning"><sup>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                </sup>0</h1>
              <p className="6">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col text-center">
              <h1 className="text-warning">
                <sup>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                </sup>
                20
              </h1>
              <p className="6">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
