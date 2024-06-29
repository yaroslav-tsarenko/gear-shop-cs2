import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Background6 from "../components/Background6";
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import "./StoreScreenPage.css";

const StoreScreenPage = () => {
  return (
    <div className="storescreenpage">
      <FrameComponent4 />
      <FrameComponent5 />
      <Background6 />
      <footer className="footer">
        <Container1 />
        <div className="separator" />
        <div className="container14">
          <div className="container15">
            <div className="cs2gearshop-2017-2024">
              © CS2GearShop 2017- 2024, All Rights Reserved.
            </div>
          </div>
          <div className="container16">
            <div className="container17">
              <img
                className="credit-cardspng-icon"
                loading="lazy"
                alt=""
                src="/creditcardspng1@2x.png"
              />
            </div>
            <div className="container18">
              <div className="supportcs2gearshop-16192-coas">
                Support@CS2GearShop 16192 Coastal Hwy, Lewes, DE 19958, United
                States
              </div>
            </div>
          </div>
        </div>
        <div className="separator1" />
        <Container2 />
      </footer>
    </div>
  );
};

export default StoreScreenPage;
