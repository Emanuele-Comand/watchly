const AuthCard = ({ authType }) => {
  const isSignUp = authType === "signup";

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

      {/* Qui puoi aggiungere i form specifici per signup/login */}
      <div className="space-y-4">
        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80"
            placeholder="Enter your password"
          />
        </div>

        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-opacity-80"
              placeholder="Confirm your password"
            />
          </div>
        )}

        <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors duration-200">
          {isSignUp ? "Create Account" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthCard;
