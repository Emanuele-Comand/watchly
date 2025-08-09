import { useSearchParams } from "react-router-dom";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import AuthCard from "../components/AuthCard";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const authType = searchParams.get("type") || "login";

  return (
    <Background>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4">
        <AuthCard authType={authType} />
      </div>
    </Background>
  );
};

export default AuthPage;
