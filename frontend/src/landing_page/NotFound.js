import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function NotFound() {
  return (
    <>
      <Navbar />
      <div className="border-bottom text-center my-5 py-5">
        <h1 className="my-4 text-body-secondary">
          {" "}
          Error 404, Page Not Found!
        </h1>
        <p className="my-4 fs-5 text-secondary">
          Sorry, the page you are looking for does not exists.
        </p>
        <Link to="/">
          <button
            className="p-2 btn btn-primary fs-5 my-3"
            style={{ width: "16rem", margin: "0 auto" }}
          >
            Go Home
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
