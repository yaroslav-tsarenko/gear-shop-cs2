import PropTypes from "prop-types";
import "./Background4.css";

const Background4 = ({ className = "", fx140f }) => {
  return (
    <div className={`background12 ${className}`}>
      <img className="fx140f-icon4" loading="lazy" alt="" src={fx140f} />
      <div className="container213">
        <div className="container214">
          <b className="fn-phase-23">
            <span>FN · </span>
            <span className="phase-23">Phase 2</span>
          </b>
        </div>
        <div className="container215">
          <div className="container216">
            <b className="b8">$376.18</b>
          </div>
        </div>
        <div className="add-to-cart-frame">
          <div className="add-to-cart3">Add to cart</div>
        </div>
      </div>
      <div className="container217">
        <div className="margin7">
          <div className="x33">x3</div>
        </div>
        <div className="container218">
          <img className="container-icon2" />
        </div>
      </div>
    </div>
  );
};

Background4.propTypes = {
  className: PropTypes.string,
  fx140f: PropTypes.string,
};

export default Background4;
