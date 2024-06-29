import PropTypes from "prop-types";
import "./HeaderDesktop1.css";

const HeaderDesktop1 = ({ className = "" }) => {
  return (
    <section className={`header-desktop1 ${className}`}>
      <div className="ticker1">
        <div className="get-100-off-container1">
          <span>{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher1">Add Voucher</span>
        </div>
      </div>
      <header className="header1">
        <div className="overlayblur1">
          <div className="link60">
            <img
              className="cs2gearshop-transparent-1-icon2"
              loading="lazy"
              alt=""
              src="/cs2gearshop-transparent-1@2x.png"
            />
          </div>
          <nav className="container47">
            <div className="link61">
              <div className="store1">Store</div>
            </div>
            <div className="link62">
              <div className="sell2">Sell</div>
            </div>
            <div className="link63">
              <div className="giveaway1">Giveaway</div>
            </div>
          </nav>
          <div className="container48">
            <div className="button2">
              <div className="container49">
                <div className="container50">
                  <img
                    className="icon3"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className="button-menu1">
              <input className="container51" type="checkbox" />
            </div>
            <div className="container52">
              <div className="container53">
                <div className="container54">
                  <img
                    className="ussvg-icon1"
                    loading="lazy"
                    alt=""
                    src="/ussvg.svg"
                  />
                </div>
                <div className="container55">
                  <div className="container56">
                    <img
                      className="icon4"
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="container57">
                <div className="container58">
                  <a className="usd">USD</a>
                </div>
                <div className="container59">
                  <div className="container60">
                    <img className="icon5" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container61">
              <div className="button3">
                <div className="container62">
                  <div className="margin2">
                    <div className="container63">
                      <div className="symbol6"></div>
                    </div>
                  </div>
                  <b className="log-in-with1">Log in with steam</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

HeaderDesktop1.propTypes = {
  className: PropTypes.string,
};

export default HeaderDesktop1;
