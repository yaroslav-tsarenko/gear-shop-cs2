import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", yourCart }) => {
  return (
    <section className={`header-desktop-parent ${className}`}>
      <div className="header-desktop">
        <header className="ticker">
          <div className="get-100-off-container">
            <span>{`Get $100 off on purchases over $30. `}</span>
            <span className="add-voucher">Add Voucher</span>
          </div>
        </header>
        <div className="header">
          <div className="overlayblur">
            <div className="link8">
              <img
                className="cs2gearshop-transparent-1-icon"
                loading="lazy"
                alt=""
                src="/cs2gearshop-transparent-1@2x.png"
              />
            </div>
            <div className="container104">
              <div className="link9">
                <div className="store">Store</div>
              </div>
              <div className="link10">
                <div className="sell">Sell</div>
              </div>
              <div className="link11">
                <div className="giveaway">Giveaway</div>
              </div>
            </div>
            <div className="container105">
              <div className="button1">
                <div className="container106">
                  <div className="container107">
                    <img
                      className="icon3"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="button-menu">
                <input className="container108" type="checkbox" />
              </div>
              <div className="container109">
                <div className="container110">
                  <div className="container111">
                    <img
                      className="ussvg-icon"
                      loading="lazy"
                      alt=""
                      src="/ussvg.svg"
                    />
                  </div>
                  <div className="container112">
                    <div className="container113">
                      <img
                        className="icon4"
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="container114">
                  <div className="container115">
                    <a className="usd">USD</a>
                  </div>
                  <div className="container116">
                    <div className="container117">
                      <img className="icon5" alt="" src="/icon-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container118">
                <div className="button2">
                  <div className="container119">
                    <div className="margin">
                      <div className="container120">
                        <div className="symbol"></div>
                      </div>
                    </div>
                    <b className="log-in-with">Log in with steam</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="frame-parent">
            <div className="your-cart-wrapper">
              <h1 className="your-cart">{yourCart}</h1>
            </div>
            <b className="view-or-edit">
              View or edit your cart before checkout
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default FrameComponent;
