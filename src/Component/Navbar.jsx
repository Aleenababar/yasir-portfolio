import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import logo5 from "../images/logo5.svg";


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar">
        <div>
          <NavLink to="./">
            <img src={logo5} alt="logo" className="logo" />
          </NavLink>
          <span className="desktopName">Yasir Azeem</span>
        </div>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <NavLink to="./" className="active">
                
                <i className="fa-solid fa-house"></i>Home
              </NavLink>
            </li>
            <li>
              < NavLink to="./skills">
                <i className="fa-solid fa-user"></i>About
              </NavLink>
            </li>
            <li>
              <NavLink to="./projects">
                <i className="fa-solid fa-laptop"></i>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="./contact">
                <i className="fa-brands fa-whatsapp"></i>Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bars"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}
export default Navbar;
