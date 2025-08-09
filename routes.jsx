import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import AuthPage from "./src/pages/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;
