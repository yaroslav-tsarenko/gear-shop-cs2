import PropTypes from "prop-types";
import "./Container6.css";

const Container6 = ({ className = "" }) => {
  return (
    <div className={`container34 ${className}`}>
      <div className="backgroundblur">
        <div className="container35">
          <div className="container36">
            <h2 className="trusted-by-legends">Trusted by legends.</h2>
          </div>
          <div className="container37">
            <div className="trusted-by-esteemed-container">
              <p className="trusted-by-esteemed">
                Trusted by esteemed pro players and
              </p>
              <p className="major-gaming-brands">major gaming brands.</p>
            </div>
            <div className="imgmargin">
              <img className="blastsvg-icon" alt="" src="/blastsvg.svg" />
            </div>
          </div>
        </div>
        <img
          className="vecteezy-honesty-flat-style-il-icon"
          loading="lazy"
          alt=""
          src="/vecteezy-honestyflatstyleillustrationvectordesign-8608294-converted-1@2x.png"
        />
      </div>
      <div className="link1">
        <div className="container38">
          <div className="container39">
            <h2 className="partnered-with-the-container">
              <p className="partnered-with">Partnered with</p>
              <p className="the-best-team">the best team.</p>
            </h2>
          </div>
          <div className="container40">
            <img
              className="vitality-logopng-icon"
              alt=""
              src="/vitalitylogopng@2x.png"
            />
          </div>
        </div>
        <img
          className="businesspeople-converted-1"
          loading="lazy"
          alt=""
          src="/businesspeople-converted-1@2x.png"
        />
      </div>
    </div>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
};

export default Container6;
