import PropTypes from "prop-types";
import "./Container41.css";

const Container4 = ({ className = "" }) => {
  return (
    <section className={`container61 ${className}`}>
      <div className="background5">
        <div className="container62">
          <div className="container63">
            <h1 className="get-5-bonus-container">
              <p className="get-5-bonus">Get $5 bonus</p>
              <p className="free-on-your">free on your</p>
              <p className="first-trade">first trade!</p>
            </h1>
          </div>
          <button className="button">
            <div className="container64">
              <b className="get-started-now">Get Started Now</b>
            </div>
          </button>
        </div>
        <img
          className="first-bonus-right-v2jpg-icon"
          loading="lazy"
          alt=""
          src="/firstbonusrightv2jpg@2x.png"
        />
      </div>
    </section>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
