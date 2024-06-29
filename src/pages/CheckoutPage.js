import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent yourCart="Checkout" />
      <FrameComponent1 />
      <Footer
        cS2GearShopTransparent1="/cs2gearshop-transparent-1-1@2x.png"
        creditCardspng="/creditcardspng1@2x.png"
      />
    </div>
  );
};

export default CheckoutPage;
