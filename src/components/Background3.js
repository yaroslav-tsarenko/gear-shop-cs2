import PropTypes from "prop-types";
import "./Background3.css";

const Background3 = ({ className = "", fx140f }) => {
  return (
    <div className={`background11 ${className}`}>
      <img className="fx140f-icon3" loading="lazy" alt="" src={fx140f} />
      <div className="container207">
        <div className="container208">
          <b className="fn-phase-22">
            <span>FN · </span>
            <span className="phase-22">Phase 2</span>
          </b>
        </div>
        <div className="container209">
          <div className="container210">
            <b className="b7">$376.18</b>
          </div>
        </div>
        <button className="add-to-cart-container">
          <div className="add-to-cart2">Add to cart</div>
        </button>
      </div>
      <div className="container211">
        <div className="margin6">
          <div className="x32">x3</div>
        </div>
        <div className="container212">
          <img className="container-icon1" />
        </div>
      </div>
    </div>
  );
};

Background3.propTypes = {
  className: PropTypes.string,
  fx140f: PropTypes.string,
};

export default Background3;
