import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`header-desktop-group ${className}`}>
      <div className="header-desktop1">
        <header className="ticker1">
          <div className="get-100-off-container1">
            <span>{`Get $100 off on purchases over $30. `}</span>
            <span className="add-voucher1">Add Voucher</span>
          </div>
        </header>
        <div className="header7">
          <div className="overlayblur1">
            <div className="link68">
              <img
                className="cs2gearshop-transparent-1-icon2"
                loading="lazy"
                alt=""
                src="/cs2gearshop-transparent-1@2x.png"
              />
            </div>
            <div className="container159">
              <div className="link69">
                <div className="store1">Store</div>
              </div>
              <div className="link70">
                <div className="sell2">Sell</div>
              </div>
              <div className="link71">
                <div className="giveaway1">Giveaway</div>
              </div>
            </div>
            <div className="container160">
              <div className="button13">
                <div className="container161">
                  <div className="container162">
                    <img
                      className="icon9"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="button-menu1">
                <input className="container163" type="checkbox" />
              </div>
              <div className="container164">
                <div className="container165">
                  <div className="container166">
                    <img
                      className="ussvg-icon2"
                      loading="lazy"
                      alt=""
                      src="/ussvg.svg"
                    />
                  </div>
                  <div className="container167">
                    <div className="container168">
                      <img
                        className="icon10"
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="container169">
                  <div className="container170">
                    <a className="usd1">USD</a>
                  </div>
                  <div className="container171">
                    <div className="container172">
                      <img className="icon11" alt="" src="/icon-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container173">
                <div className="button14">
                  <div className="container174">
                    <div className="margin2">
                      <div className="container175">
                        <div className="symbol6"></div>
                      </div>
                    </div>
                    <b className="log-in-with1">Log in with steam</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-div">
        <div className="frame-parent1">
          <div className="welcome-darnell-wrapper">
            <h1 className="welcome-darnell">Welcome, Darnell</h1>
          </div>
          <b className="your-personal-dashboard">Your Personal Dashboard</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
