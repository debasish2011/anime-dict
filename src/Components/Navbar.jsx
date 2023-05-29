import React, { useState, useEffect, useContext } from "react";
import AnimeContext from "./Context/animeContext";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { getData } = useContext(AnimeContext);
  let location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData(search);
  }, [search]);
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AnimeWatchList
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${
                    location.pathname === "/mylist" ? "active" : ""
                  }`} to="/mylist">
                MyList
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
