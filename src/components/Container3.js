import Container from "./Container";
import PropTypes from "prop-types";
import "./Container3.css";

const Container3 = ({ className = "" }) => {
  return (
    <div className={`container70 ${className}`}>
      <div className="container71">
        <div className="container72">
          <h1 className="cs2-skin-exchange">CS2 Skin Exchange Made Easy</h1>
        </div>
        <button className="link6">
          <div className="container73">
            <b className="show-more">Show more</b>
          </div>
        </button>
      </div>
      <div className="container74">
        <Container cheapestCS2Skins958x575we="/cheapestcs2skins958x575webp@2x.png" />
        <Container cheapestCS2Skins958x575we="/bestcs2skins958x575jpg@2x.png" />
        <Container cheapestCS2Skins958x575we="/mostexpensivecs2knife958x575webp@2x.png" />
        <div className="container75">
          <div className="link7">
            <div className="container76">
              <img
                className="cs-go-skins-will-drop-in-2023-icon"
                loading="lazy"
                alt=""
                src="/cs-goskinswilldropin2023958x575jpg@2x.png"
              />
            </div>
            <div className="container77">
              <div className="container78">
                <div className="february-20241">15 February 2024</div>
              </div>
              <div className="container79">
                <b className="cs2-drop-pool">
                  CS2 Drop Pool 2024: What CS2 Skins Will Drop
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
};

export default Container3;
