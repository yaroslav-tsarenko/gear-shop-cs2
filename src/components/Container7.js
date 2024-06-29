import Background5 from "./Background5";
import PropTypes from "prop-types";
import "./Container7.css";

const Container7 = ({ className = "" }) => {
  return (
    <div className={`container47 ${className}`}>
      <div className="container48">
        <div className="container49">
          <div className="container50">
            <h1 className="popular-cs2-skins">Popular CS2 skins</h1>
          </div>
          <div className="container51">
            <div className="k-in-stock">800k+ In stock</div>
          </div>
        </div>
        <button className="link3">
          <div className="container52">
            <b className="browse-all-skins">Browse all skins</b>
          </div>
        </button>
      </div>
      <div className="container53">
        <div className="container54">
          <div className="background2">
            <div className="container55">
              <div className="link4">
                <img
                  className="container-icon"
                  loading="lazy"
                  alt=""
                  src="/container@2x.png"
                />
                <div className="container56">
                  <div className="container57">
                    <b className="sticker-capsule-2">Sticker Capsule 2</b>
                  </div>
                  <div className="container58">
                    <b className="offers1">31 offers</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Background5
            fx140f="/140fx140f@2x.png"
            mW="MW"
            jade="Jade"
            offers="9 offers"
          />
          <Background5
            fx140f="/140fx140f-1@2x.png"
            mW="FT"
            jade="Neon Rider"
            offers="11 offers"
          />
          <Background5
            fx140f="/140fx140f-2@2x.png"
            mW="FN"
            jade="Doppler"
            offers="5 offers"
          />
          <Background5
            fx140f="/140fx140f-3@2x.png"
            mW="FT"
            jade="Racing Green"
            offers="7 offers"
          />
          <Background5
            fx140f="/140fx140f-4@2x.png"
            mW="FT"
            jade="Duct Tape"
            offers="4 offers"
          />
          <Background5
            fx140f="/140fx140f-5@2x.png"
            mW="FT"
            jade="Emerald"
            offers="6 offers"
          />
          <Background5
            fx140f="/140fx140f-6@2x.png"
            mW="BS"
            jade="Amphibious"
            offers="2 offers"
          />
          <Background5
            fx140f="/140fx140f-7@2x.png"
            mW="BS"
            jade="Amphibious"
            offers="2 offers"
          />
          <Background5
            fx140f="/140fx140f-7@2x.png"
            mW="BS"
            jade="Amphibious"
            offers="2 offers"
          />
        </div>
        <div className="background3">
          <div className="container59">
            <img className="icon1" alt="" src="/icon-5.svg" />
          </div>
        </div>
        <div className="background4">
          <div className="container60">
            <img className="icon2" alt="" src="/icon-6.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Container7.propTypes = {
  className: PropTypes.string,
};

export default Container7;
