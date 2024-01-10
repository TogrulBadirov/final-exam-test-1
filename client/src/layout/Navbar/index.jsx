import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    setScrollTop(window.scrollY);
    console.log(scrollTop);
  }, [window.scrollY]);

  return (
    <>
      <nav>
        <div id="navbar">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
              alt=""
            />
          </div>
          <div className="middle-part">
            <ul className="nav-links">
              <li className="nav-elements">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-elements">
                <Link>Shop</Link>
              </li>
              <li className="nav-elements">
                <Link>Blog</Link>
              </li>
              <li className="nav-elements">
                <Link>Pages</Link>
              </li>
              <li className="nav-elements">
                <Link>Contact</Link>
              </li>
              <li className="nav-elements">
                <Link to="/add-page">Add Page</Link>
              </li>
            </ul>
          </div>
          <div className="nav-actions">
            <div className="search-icon">
              <CiSearch />
            </div>
            <div className="basket-icon">
              <SlBasket />
            </div>
            <button className="nav-button">Buy Now</button>
          </div>
        </div>

        <div id="mobile-nav">
          <div className="mobile-nav-top">
            <div className="logo">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
                alt=""
              />
            </div>
            <div className="mobile-nav-burger">
              <button
                className="mobile-nav-button"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          <div className={`mobile-nav-bottom ${isNavOpen ? "active" : ""}`}>
            <ul className="nav-lists">
              <li className="nav-elements">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-elements">
                <Link>Shop</Link>
              </li>
              <li className="nav-elements">
                <Link>Blog</Link>
              </li>
              <li className="nav-elements">
                <Link>Pages</Link>
              </li>
              <li className="nav-elements">
                <Link>Contact</Link>
              </li>
              <li className="nav-elements">
                <Link to="/add-page">Add Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
