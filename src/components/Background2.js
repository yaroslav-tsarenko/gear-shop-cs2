import PropTypes from "prop-types";
import "./Background2.css";

const Background2 = ({ className = "", fx140f }) => {
  return (
    <div className={`background10 ${className}`}>
      <img className="fx140f-icon2" loading="lazy" alt="" src={fx140f} />
      <div className="container200">
        <div className="container201">
          <b className="fn-phase-21">
            <span>FN · </span>
            <span className="phase-21">Phase 2</span>
          </b>
        </div>
        <div className="container202">
          <div className="container203">
            <b className="b6">$376.18</b>
          </div>
        </div>
        <div className="add-to-cart-wrapper">
          <div className="add-to-cart1">Add to cart</div>
        </div>
      </div>
      <div className="container204">
        <div className="margin5">
          <div className="x31">x3</div>
        </div>
        <div className="container205">
          <div className="container206">
            <img className="icon16" alt="" src="/icon-19.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
  fx140f: PropTypes.string,
};

export default Background2;
