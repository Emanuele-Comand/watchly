import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import AuthPage from "./src/pages/AuthPage";
import NotFound from "./src/pages/404";
import Market from "./src/pages/Market";
import Cart from "./src/pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/market" element={<Market />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
