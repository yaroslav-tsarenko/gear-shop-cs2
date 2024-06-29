import PropTypes from "prop-types";
import "./HeaderDesktop2.css";

const HeaderDesktop2 = ({ className = "" }) => {
  return (
    <section className={`header-desktop2 ${className}`}>
      <header className="ticker2">
        <div className="get-100-off-container2">
          <span>{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher2">Add Voucher</span>
        </div>
      </header>
      <div className="header2">
        <div className="overlayblur2">
          <div className="link64">
            <img
              className="cs2gearshop-transparent-1-icon3"
              loading="lazy"
              alt=""
              src="/cs2gearshop-transparent-1@2x.png"
            />
          </div>
          <div className="container64">
            <div className="link65">
              <div className="store2">Store</div>
            </div>
            <div className="link66">
              <div className="sell3">Sell</div>
            </div>
            <div className="link67">
              <div className="giveaway2">Giveaway</div>
            </div>
          </div>
          <div className="container65">
            <div className="button5">
              <div className="container66">
                <div className="container67">
                  <img
                    className="icon6"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className="button-menu2">
              <input className="container68" type="checkbox" />
            </div>
            <div className="container69">
              <div className="container70">
                <div className="container71">
                  <img
                    className="ussvg-icon2"
                    loading="lazy"
                    alt=""
                    src="/ussvg.svg"
                  />
                </div>
                <div className="container72">
                  <div className="container73">
                    <img
                      className="icon7"
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="container74">
                <div className="container75">
                  <a className="usd1">USD</a>
                </div>
                <div className="container76">
                  <div className="container77">
                    <img className="icon8" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container78">
              <div className="button6">
                <div className="container79">
                  <div className="margin3">
                    <div className="container80">
                      <div className="symbol7"></div>
                    </div>
                  </div>
                  <b className="log-in-with2">Log in with steam</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderDesktop2.propTypes = {
  className: PropTypes.string,
};

export default HeaderDesktop2;
