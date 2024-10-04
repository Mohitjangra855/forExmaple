import React from "react";
import { Link } from "react-router-dom";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-1 p-5">
      <div className="row">
        <div className="col-5 d-flex justify-content-center flex-column">
          <h1 className="text-body-secondary mb-3">{productName}</h1>
          <p className="fs-5 text-secondary">{productDescription}</p>

          <Link className="text-decoration-none fs-5" to={learnMore}>
            Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-7">
          <img src={imageUrl} alt="leftImage" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
