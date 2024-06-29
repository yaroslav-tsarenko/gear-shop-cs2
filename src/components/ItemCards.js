import CardContainers from "./CardContainers";
import PropTypes from "prop-types";
import "./ItemCards.css";

const ItemCards = ({ className = "" }) => {
  return (
    <div className={`item-cards ${className}`}>
      <div className="header1">
        <div className="header-child" />
        <div className="product-header">
          <b className="product">Product</b>
        </div>
        <div className="price-quantity">
          <b className="price">Price</b>
          <b className="quantity">Quantity</b>
        </div>
        <b className="total">Total</b>
      </div>
      <CardContainers
        fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
        discount20OFF="Discount: 20% OFF"
      />
      <CardContainers
        fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
        discount20OFF="Worth USD $400"
      />
      <CardContainers
        fentyBeauty50OFFGiftCard="Travel GiftCard"
        discount20OFF="Worth USD $400"
      />
      <div className="footer-actions">
        <button className="button3">
          <img className="tag-icon" alt="" src="/tag-icon.svg" />
          <b className="button4">Go Back</b>
          <img className="tag-icon1" alt="" src="/tag-icon.svg" />
        </button>
        <button className="button5">
          <img className="tag-icon2" alt="" src="/tag-icon.svg" />
          <b className="button6">Checkout</b>
          <img className="tag-icon3" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

ItemCards.propTypes = {
  className: PropTypes.string,
};

export default ItemCards;
