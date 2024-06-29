import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import "./AccuntPage.css";

const AccuntPage = () => {
  return (
    <div className="accuntpage">
      <FrameComponent2 />
      <FrameComponent3 />
      <Footer
        cS2GearShopTransparent1="/cs2gearshop-transparent-1-1@2x.png"
        creditCardspng="/creditcardspng1@2x.png"
      />
    </div>
  );
};

export default AccuntPage;
