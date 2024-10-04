import React from "react";
import { Link } from "react-router-dom";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-1 p-5">
      <div className="row">
        <div className="col-7">
          <img src={imageUrl} alt="leftImage" />
        </div>
        <div className="col-5 d-flex justify-content-center flex-column">
          <h1 className="text-body-secondary mb-3">{productName}</h1>
          <p className="fs-5 text-secondary">{productDescription}</p>
          <div className="row text-center">
            <div className="col">
              <Link className="text-decoration-none fs-5" to={tryDemo}>
                Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to={googlePlay}>
                <img src="media/googlePlayBadge.svg" className="mt-3" alt="googlePlay" />
              </Link>
            </div>
            <div className="col">
              <Link className="text-decoration-none fs-5" to={learnMore}>
                Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to={appStore}>
                <img src="media/appstoreBadge.svg" className="mt-3" alt="googlePlay" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
