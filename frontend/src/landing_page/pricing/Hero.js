import React from "react";

function Hero() {
  return (
    <div className="container pt-5 mb-3" style={{ marginTop: "6rem" }}>
      <div className="text-center">
        <h1 className="text-body-secondary fs-1 py-3">Pricing</h1>
        <p className="text-secondary fs-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row mt-5   py-5 border-top border-bottom ">
        <div className="col-4 text-center">
          <img src="media/pricingEquity.svg" style={{width:"60%"}} alt="img" />
          <h1 className="text-body-secondary fs-3 py-3">
            Free equity delivery
          </h1>
          <p className="text-secondary fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/intradayTrades.svg" style={{width:"60%"}} alt="img" />
          <h1 className="text-body-secondary fs-3 py-3">
            Intraday and F&O trades
          </h1>
          <p className="text-secondary fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/pricingEquity.svg" style={{width:"60%"}} alt="img" />
          <h1 className="text-body-secondary fs-3 py-3">Free direct MF</h1>
          <p className="text-secondary fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
