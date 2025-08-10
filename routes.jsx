import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import AuthPage from "./src/pages/AuthPage";
import NotFound from "./src/pages/404";
import Market from "./src/pages/Market";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/market" element={<Market />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
