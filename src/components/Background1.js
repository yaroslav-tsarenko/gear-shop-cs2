import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "", fx140f }) => {
  return (
    <div className={`background9 ${className}`}>
      <img className="fx140f-icon1" loading="lazy" alt="" src={fx140f} />
      <div className="container193">
        <div className="container194">
          <b className="fn-phase-2">
            <span>FN · </span>
            <span className="phase-2">Phase 2</span>
          </b>
        </div>
        <div className="container195">
          <div className="container196">
            <b className="quantity-labels1">$376.18</b>
          </div>
        </div>
        <button className="cart-buttons">
          <div className="add-to-cart">Add to cart</div>
        </button>
      </div>
      <div className="container197">
        <div className="margin4">
          <div className="x3">x3</div>
        </div>
        <div className="container198">
          <div className="container199">
            <img className="icon15" alt="" src="/icon-19.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
  fx140f: PropTypes.string,
};

export default Background1;
