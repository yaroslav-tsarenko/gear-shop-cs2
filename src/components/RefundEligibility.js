import PropTypes from "prop-types";
import "./RefundEligibility.css";

const RefundEligibility = ({ className = "" }) => {
  return (
    <div className={`refund-eligibility ${className}`}>
      <h1 className="refund-eligibility1">
        <ol className="refund-eligibility2">
          <li>Refund Eligibility</li>
        </ol>
      </h1>
      <div className="eligibility-description">
        <div className="refunds-will-be">
          2.1 Refunds will be issued based on the cancellation period and terms
          outlined in our policy.
        </div>
        <div className="if-cancellation-is">
          2.2 If cancellation is initiated within the specified period, you will
          be eligible for a full refund of the purchase amount.
        </div>
        <div className="cancellations-made-after1">
          2.3 Cancellations made after the specified period may be eligible for
          a partial refund or no refund, depending on the circumstances and the
          terms associated with the service or product.
        </div>
      </div>
    </div>
  );
};

RefundEligibility.propTypes = {
  className: PropTypes.string,
};

export default RefundEligibility;
