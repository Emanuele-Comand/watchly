const UserDropdown = () => {
  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-32 py-2 z-50">
      <a
        href="/signup"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
      >
        Sign up
      </a>
      <a
        href="/login"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
      >
        Login
      </a>
    </div>
  );
};

export default UserDropdown;
