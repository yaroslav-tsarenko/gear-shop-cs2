import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({
  className = "",
  overlayBlurFlex,
  overlayBlurBackgroundColor,
  overlayBlurAlignSelf,
  overlayBlurPadding,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      flex: overlayBlurFlex,
      backgroundColor: overlayBlurBackgroundColor,
      alignSelf: overlayBlurAlignSelf,
      padding: overlayBlurPadding,
    };
  }, [
    overlayBlurFlex,
    overlayBlurBackgroundColor,
    overlayBlurAlignSelf,
    overlayBlurPadding,
  ]);

  return (
    <div className={`background8 ${className}`} style={backgroundStyle}>
      <div className="header10">
        <div className="overlayblur2">
          <div className="link74">
            <img
              className="cs2gearshop-transparent-1-icon3"
              alt=""
              src="/cs2gearshop-transparent-1@2x.png"
            />
          </div>
          <nav className="container176">
            <div className="link75">
              <div className="store2">Store</div>
            </div>
            <div className="link76">
              <div className="sell3">Sell</div>
            </div>
            <div className="link77">
              <div className="giveaway2">Giveaway</div>
            </div>
          </nav>
          <div className="container177">
            <div className="button15">
              <div className="container178">
                <div className="container179">
                  <img className="icon12" alt="" src="/icon.svg" />
                </div>
              </div>
            </div>
            <div className="button-menu2">
              <input className="container180" type="checkbox" />
            </div>
            <div className="container181">
              <div className="container182">
                <div className="container183">
                  <img className="ussvg-icon3" alt="" src="/ussvg.svg" />
                </div>
                <div className="container184">
                  <div className="container185">
                    <img className="icon13" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
              <div className="container186">
                <div className="container187">
                  <a className="usd2">USD</a>
                </div>
                <div className="container188">
                  <div className="container189">
                    <img className="icon14" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container190">
              <div className="button16">
                <div className="container191">
                  <div className="margin3">
                    <div className="container192">
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
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,

  /** Style props */
  overlayBlurFlex: PropTypes.any,
  overlayBlurBackgroundColor: PropTypes.any,
  overlayBlurAlignSelf: PropTypes.any,
  overlayBlurPadding: PropTypes.any,
};

export default Background;
