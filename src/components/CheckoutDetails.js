import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details ${className}`}>
      <div className="details-header">
        <button className="header2">
          <b className="checkout-details1">Checkout Details</b>
        </button>
      </div>
      <div className="subtotal-total">
        <div className="values">
          <b className="cart-subtotal">Cart Subtotal</b>
          <b className="value-placeholder">$360.00</b>
        </div>
      </div>
      <div className="shipping-taxes">
        <div className="tax-details">
          <div className="tax-labels">
            <b className="shipping-handling">{`Shipping & Handling`}</b>
            <b className="other-taxes">Other Taxes</b>
          </div>
          <div className="tax-labels1">
            <b className="b">$0.00</b>
            <b className="b1">$0.00</b>
          </div>
        </div>
      </div>
      <div className="checkout-details-inner">
        <div className="frame-child" />
      </div>
      <div className="subtotal-total1">
        <div className="grand-total-parent">
          <b className="grand-total">Grand Total</b>
          <b className="b2">$360.00</b>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
