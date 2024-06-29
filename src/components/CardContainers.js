import PropTypes from "prop-types";
import "./CardContainers.css";

const CardContainers = ({
  className = "",
  fentyBeauty50OFFGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`card-containers ${className}`}>
      <div className="card-backgrounds-parent">
        <img
          className="card-backgrounds-icon"
          loading="lazy"
          alt=""
          src="/rectangle-4554@2x.png"
        />
        <div className="card-details">
          <b className="fenty-beauty-50">{fentyBeauty50OFFGiftCard}</b>
          <b className="discount-20-off">{discount20OFF}</b>
        </div>
        <div className="card-actions">
          <div className="quantity-adjuster">
            <b className="quantity-labels">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="action-buttons">
            <div className="button-containers">
              <div className="inner-buttons">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="placeholder">3</b>
              <div className="decrease-buttons">
                <img
                  className="icon-minus"
                  loading="lazy"
                  alt=""
                  src="/iconminus.svg"
                />
              </div>
            </div>
            <div className="renewal-info">
              <b className="hourly">Hourly</b>
              <div className="renewal-placeholder">
                <img
                  className="innermost-placeholder-icon"
                  alt=""
                  src="/innermost-placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b className="card-separator">$120.00</b>
      </div>
      <div className="card-containers-child" />
    </div>
  );
};

CardContainers.propTypes = {
  className: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default CardContainers;
