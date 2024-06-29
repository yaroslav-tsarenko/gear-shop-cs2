import FrameComponent from "../components/FrameComponent";
import ItemCards from "../components/ItemCards";
import CheckoutDetails from "../components/CheckoutDetails";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent yourCart="Your Cart" />
      <section className="cart-items">
        <div className="item-cards-parent">
          <ItemCards />
          <CheckoutDetails />
        </div>
      </section>
      <Footer
        cS2GearShopTransparent1="/cs2gearshop-transparent-1-1@2x.png"
        creditCardspng="/creditcardspng1@2x.png"
      />
    </div>
  );
};

export default CartDetailsPage;
