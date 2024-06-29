import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="paymentpage-inner">
        <FrameComponent4 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <FrameComponent3 />
      </div>
    </div>
  );
};

export default PaymentPage;
