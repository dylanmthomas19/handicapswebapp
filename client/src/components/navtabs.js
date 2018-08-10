import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Superarm Gallery")}
        className={
          props.currentPage === "Superarm Gallery" ? "nav-link active" : "nav-link"
        }
      >
        SA Gallery
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Motorhome")}
        className={
          props.currentPage === "Motorhome" ? "nav-link active" : "nav-link"
        }
      >
        SA 124 Motorhome Sprinter
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("History")}
        className={
          props.currentPage === "History" ? "nav-link active" : "nav-link"
        }
      >
        History
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Blog")}
        className={
          props.currentPage === "Blog" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>

  </ul>
);

export default NavTabs;
