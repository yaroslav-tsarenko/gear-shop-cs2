import PropTypes from "prop-types";
import "./Container4.css";

const Container4 = ({ className = "" }) => {
  return (
    <div className={`container19 ${className}`}>
      <div className="container20">
        <div className="container21">
          <div className="container22">
            <div className="container23">
              <h1 className="instant-secure-cs2-container">
                <p className="instant-secure">Instant, secure</p>
                <p className="cs2-skin-trading">CS2 skin trading</p>
              </h1>
            </div>
            <div className="container24">
              <div className="heading-1">
                <b className="trade-cs2-csgo">
                  Trade CS2 (CS:GO) skins with fast trading bots
                </b>
              </div>
              <div className="container25">
                <div className="cs2gearshop-is-the">
                  CS2GearShop is the highest rated CS2 (CSGO) skin trading site.
                </div>
              </div>
              <div className="container26">
                <div className="the-best-trading">
                  The best trading bot for instant trades with the lowest fees.
                </div>
              </div>
            </div>
            <div className="container27">
              <button className="link">
                <div className="container28">
                  <b className="trade-skins-now">Trade Skins Now</b>
                </div>
              </button>
              <div className="container29">
                <div className="container30">
                  <img className="icon" alt="" src="/icon-4.svg" />
                </div>
                <div className="container31">
                  <div className="register-now-and">
                    Register now and get $5 bonus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container32">
          <div className="container33">
            <img className="leftpng-icon" alt="" src="/leftpng@2x.png" />
          </div>
          <img className="image-icon" alt="" src="/image@2x.png" />
          <img className="image-icon1" alt="" src="/image-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
