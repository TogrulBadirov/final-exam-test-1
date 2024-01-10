import React from "react";
import "./index.scss";
import SectionHeader from "../../SectionHeader";
import { Link } from "react-router-dom";
const LastNews = () => {
  return (
    <section id="last-news">
      <div className="container">
        <SectionHeader
          title={"Latest News"}
          headerTopContent={"Popular Item in the market"}
        />
        <div className="new-container">
          <div className="news">
            <div className="news-img">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp"
                alt=""
              />
            </div>
            <div className="news-actions">
              <span>By Admin</span>
              <span>2 Comments</span>
            </div>
            <h4>The Richland Center Shooping News and weekly shooper</h4>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            <Link>Read More -</Link>
          </div>

          <div className="news">
            <div className="news-img">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp"
                alt=""
              />
            </div>
            <div className="news-actions">
              <span>By Admin</span>
              <span>2 Comments</span>
            </div>
            <h4>The Richland Center Shooping News and weekly shooper</h4>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            <Link>Read More -</Link>
          </div>

          <div className="news">
            <div className="news-img">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp"
                alt=""
              />
            </div>
            <div className="news-actions">
              <span>By Admin</span>
              <span>2 Comments</span>
            </div>
            <h4>The Richland Center Shooping News and weekly shooper</h4>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            <Link>Read More -</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastNews;
