import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`account-content-wrapper ${className}`}>
      <div className="account-content">
        <div className="account-details">
          <h1 className="user-account">User Account</h1>
          <input
            className="header8"
            placeholder="Your Active Downloads"
            type="text"
          />
          <div className="cart-row-1">
            <div className="product1">
              <img
                className="product-image-icon"
                loading="lazy"
                alt=""
                src="/rectangle-4554@2x.png"
              />
              <div className="title">
                <b className="fenty-beauty-501">
                  Fenty Beauty 50% OFF Gift Card
                </b>
                <b className="discount-20-off1">Discount: 20% OFF</b>
              </div>
            </div>
            <div className="downloads-label-parent">
              <b className="downloads-label">$120.00</b>
              <b className="credits1">12 Credits</b>
            </div>
            <div className="up-time-parent">
              <b className="up-time">Up Time</b>
              <b className="hrs">120 Hrs</b>
            </div>
            <div className="renewal-date-parent">
              <div className="renewal-date">
                <b className="next-renewal">Next Renewal</b>
                <b className="april-2024">24 April, 2024</b>
              </div>
              <div className="links">
                <div className="link72">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link73">
                  <img
                    className="icons-block1"
                    loading="lazy"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-details-child" />
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details6">
            <button className="header9">
              <b className="user-details">User Details</b>
            </button>
            <div className="user-data-field">
              <b className="name">Name</b>
              <b className="darnell-roob">Darnell Roob</b>
            </div>
            <div className="user-data-field1">
              <b className="email-address1">Email Address</b>
              <b className="darnellroobhotmailcom">Darnell.Roob@hotmail.com</b>
            </div>
            <div className="user-data-field2">
              <b className="plan">Plan</b>
              <b className="basic">Basic</b>
            </div>
            <div className="user-data-field3">
              <b className="expiry-date">Expiry Date</b>
              <b className="april-20241">24 April, 2024</b>
            </div>
            <div className="user-data-field4">
              <b className="auto-renewal">Auto Renewal</b>
              <b className="on">On</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
