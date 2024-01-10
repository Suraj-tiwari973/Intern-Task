import React from "react";
import "../styles/navbar.css";

const Navbar = ({username}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            SOME LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active text-light" aria-current="page" href="#">
                {
                  username ? username : "HELLO USER"
                }
              </a>
              <a className="nav-link bg-warning text-dark rounded mx-3" href="#">
                LOGOUT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
