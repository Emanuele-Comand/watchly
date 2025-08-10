import { useAuthStore } from "../stores";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCard = ({ authType }) => {
  const isSignUp = authType === "signup";
  const { login, signup, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Il nome è obbligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email non valida";
    }

    if (!formData.password) {
      newErrors.password = "La password è obbligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "La password deve essere di almeno 6 caratteri";
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Le password non coincidono";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      if (isSignUp) {
        await signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else {
        await login(formData.email, formData.password);
      }

      console.log("Authentication completed!", formData);

      navigate("/");
    } catch (error) {
      console.error("Error during authentication:", error);
      setErrors({ general: "Errore durante l'autenticazione" });
    }
  };

  return (
    <div
      className={`bg-white/20 border border-white/30 text-white backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-md w-full transform ${
        isSignUp ? "translate-y-4" : "translate-y-2"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        {isSignUp ? "Sign Up" : "Login"}
      </h1>

      <p className="text-center mb-6">
        {isSignUp
          ? "Create your account to get started"
          : "Welcome back! Please sign in to your account"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        )}

        {errors.general && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-md p-3">
            <p className="text-red-400 text-sm">{errors.general}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading
            ? isSignUp
              ? "Creating Account..."
              : "Signing In..."
            : isSignUp
            ? "Create Account"
            : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default AuthCard;
