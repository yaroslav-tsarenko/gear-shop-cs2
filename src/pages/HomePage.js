import Background from "../components/Background";
import Container4 from "../components/Container4";
import Container6 from "../components/Container6";
import Container7 from "../components/Container7";
import Container3 from "../components/Container3";
import Container5 from "../components/Container5";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Background
        overlayBlurFlex="unset"
        overlayBlurBackgroundColor="unset"
        overlayBlurAlignSelf="stretch"
        overlayBlurPadding="0px 20px"
      />
      <section className="container">
        <Container4 />
        <Container6 />
        <Container7 />
      </section>
      <section className="background">
        <div className="container1">
          <div className="container2">
            <div className="container3">
              <h2 className="trade-cs2-skins">Trade CS2 skins</h2>
            </div>
            <div className="container4">
              <div className="upgrade-your-skins-container">
                <p className="upgrade-your-skins">Upgrade your skins to the</p>
                <p className="latest-collections-easily">
                  latest collections easily and
                </p>
                <p className="safely">safely.</p>
              </div>
            </div>
          </div>
          <div className="container5">
            <div className="container6">
              <h2 className="buy-skins">Buy skins</h2>
            </div>
            <div className="container7">
              <div className="upgrade-your-skins-container1">
                <p className="upgrade-your-skins1">Upgrade your skins to the</p>
                <p className="latest-collections-easily1">
                  latest collections easily and
                </p>
                <p className="safely1">safely.</p>
              </div>
            </div>
          </div>
          <div className="container8">
            <div className="container9">
              <h2 className="sell-skins">Sell Skins</h2>
            </div>
            <div className="container10">
              <div className="upgrade-your-skins-container2">
                <p className="upgrade-your-skins2">Upgrade your skins to the</p>
                <p className="latest-collections-easily2">
                  latest collections easily and
                </p>
                <p className="safely2">safely.</p>
              </div>
            </div>
          </div>
          <div className="container11">
            <div className="container12">
              <h2 className="free-giveaways">Free giveaways</h2>
            </div>
            <div className="container13">
              <div className="upgrade-your-skins-container3">
                <p className="upgrade-your-skins3">Upgrade your skins to the</p>
                <p className="latest-collections-easily3">
                  latest collections easily and
                </p>
                <p className="safely3">safely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container4 />
      <section className="container-parent">
        <Container3 />
        <Container5 />
      </section>
      <Footer
        cS2GearShopTransparent1="/cs2gearshop-transparent-1@2x.png"
        creditCardspng="/creditcardspng@2x.png"
      />
    </div>
  );
};

export default HomePage;
