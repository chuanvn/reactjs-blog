import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  imageNumber = Math.floor(Math.random() * (2 - 1) + 1);
  styles = {
    bg: {
      background: `url(/images/category-${this.imageNumber}.jpg) no-repeat center center`,
    },
  };
  render() {
    return (
      <>
        <header>
          <div className="container-fluid position-relative no-side-padding">
            <Link to="/home" className="logo">
              <img src="/images/logo.png" alt="Logo Image" />
            </Link>
            <div className="menu-nav-icon" data-nav-menu="#main-menu">
              <i className="ion-navicon" />
            </div>
            <ul className="main-menu visible-on-click" id="main-menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
            {/* main-menu */}
            <div className="src-area">
              <form>
                <button className="src-btn" type="submit">
                  <i className="ion-ios-search-strong" />
                </button>
                <input
                  className="src-input"
                  type="text"
                  placeholder="Type of search"
                />
              </form>
            </div>
          </div>
          {/* conatiner */}
        </header>
        <div className="slider" style={this.styles.bg}></div>
        {/* slider */}
      </>
    );
  }
}
