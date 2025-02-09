import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartDetailsPage from "./pages/CartDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccuntPage from "./pages/AccuntPage";
import StoreScreenPage from "./pages/StoreScreenPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cartdetailspage":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutpage":
        title = "";
        metaDescription = "";
        break;
      case "/accuntpage":
        title = "";
        metaDescription = "";
        break;
      case "/storescreenpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cartdetailspage" element={<CartDetailsPage />} />
      <Route path="/checkoutpage" element={<CheckoutPage />} />
      <Route path="/accuntpage" element={<AccuntPage />} />
      <Route path="/storescreenpage" element={<StoreScreenPage />} />
    </Routes>
  );
}
export default App;
