import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <h1 className="mx-5 px-5 text-primary fs-4 my-5">Brokerage Calculator</h1>
          <ul>
            <li className="text-secondary">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="text-secondary">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="text-secondary">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="text-secondary">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="text-secondary">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="text-secondary">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-2">
        <h1 className="text-center fs-4 text-primary  my-5">List of charges</h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
