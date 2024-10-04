import React from "react";
import { Link } from "react-router-dom";
function CreateTicket() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <h1 className="fs-3 fw-normal">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 my-4 ps-2">
          <h3 className="fw-normal fs-4 mb-4"><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h3>
          <p>
            <Link to="#" className="text-decoration-none  p-3">
              Getting started
            </Link>
          </p>

          <p>
            <Link to="#" className="text-decoration-none p-3">
              Online
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
              Offline
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
              Charges
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
              Company, Partnership and HUF
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
              Non Resident Indian (NRI)
            </Link>
          </p>
        </div>
        <div className="col-4 my-4 ps-2">
          <h3 className="fw-normal fs-4 mb-4"><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</h3>
          <p>
            <Link to="#" className="text-decoration-none  p-3">
            Login credentials
            </Link>
          </p>

          <p>
            <Link to="#" className="text-decoration-none p-3">
           Your Profile
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Account modification and segment addition
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            CMR & DP ID
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Nomination
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Transfer and conversion of shares
            </Link>
          </p>
        </div>
        <div className="col-4 my-4 ps-2">
          <h3 className="fw-normal fs-4 mb-4"><i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</h3>
          <p>
            <Link to="#" className="text-decoration-none  p-3">
            Trading FAQs
            </Link>
          </p>

          <p>
            <Link to="#" className="text-decoration-none p-3">
            Kite
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Margins
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Product and order types
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Corporate actions
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Kite features
            </Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 my-4 ps-2">
          <h3 className="fw-normal fs-4 mb-4"><i class="fa fa-university" aria-hidden="true"></i> Funds</h3>
          <p>
            <Link to="#" className="text-decoration-none  p-3">
            Fund withdrawal
            </Link>
          </p>

          <p>
            <Link to="#" className="text-decoration-none p-3">
            Adding funds
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Adding bank accounts
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            eMandates
            </Link>
          </p>
        </div>
        <div className="col-4 my-4 ps-2">
          <h3 className="fw-normal fs-4 mb-4"><i class="fa fa-codiepie" aria-hidden="true"></i> Console</h3>
          <p>
            <Link to="#" className="text-decoration-none  p-3">
            IPO
            </Link>
          </p>

          <p>
            <Link to="#" className="text-decoration-none p-3">
            Portfolio
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Funds statement
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Profile
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Reports
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Referral program
            </Link>
          </p>
        </div>
        <div className="col-4 my-4 ps-2">
          <h3 className="fw-normal fs-4 mb-4"><i class="fa fa-circle" aria-hidden="true"></i> Coin</h3>
          <p>
            <Link to="#" className="text-decoration-none  p-3">
            Understanding mutual funds and Coin
            </Link>
          </p>

          <p>
            <Link to="#" className="text-decoration-none p-3">
            Coin app
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Coin web
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            Transactions and reports
            </Link>
          </p>
          <p>
            <Link to="#" className="text-decoration-none p-3">
            National Pension Scheme (NPS)
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
