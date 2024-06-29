import PropTypes from "prop-types";
import "./Background5.css";

const Background5 = ({ className = "", fx140f, mW, jade, offers }) => {
  return (
    <div className={`background1 ${className}`}>
      <div className="container41">
        <div className="link2">
          <div className="container42">
            <img className="fx140f-icon" loading="lazy" alt="" src={fx140f} />
          </div>
          <div className="container43">
            <div className="container44">
              <b className="mw">{mW}</b>
            </div>
            <div className="container45">
              <b className="jade">{jade}</b>
            </div>
            <div className="container46">
              <b className="offers">{offers}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Background5.propTypes = {
  className: PropTypes.string,
  fx140f: PropTypes.string,
  mW: PropTypes.string,
  jade: PropTypes.string,
  offers: PropTypes.string,
};

export default Background5;
