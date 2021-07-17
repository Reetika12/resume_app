import React from "react";
function Aboutme() {
  return (
    <div className="card">
      <div className="card-content">
        <h6 className="mt-bottom">
          <strong>About me</strong>
        </h6>
        <p className="grey-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="card-action">
          <strong>Personal Info</strong>

          <div className="col mt">
            <p>
              <strong>Address:</strong>123 lorem
            </p>
            <p>
              <strong>Email:</strong>test@gmail.com
            </p>
            <p>
              <strong>Phone:</strong>123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
