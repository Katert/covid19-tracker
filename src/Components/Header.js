import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class Header extends Component {
  render() {
    return (
      <motion.nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-brand">
          <span className="navbar-item">
            <a>
              <h3 id="tool-title">🧬 COVID-19 Tracker</h3>
            </a>
          </span>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a id="more-dropdown" className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a
                  href="https://github.com/Katert/covid19-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-item"
                >
                  Project repo (Github)
                </a>
                <hr className="navbar-divider" />
                <Link to={"/report-issue"} className="navbar-item">
                  Report an issue (coming soon)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    );
  }
}
