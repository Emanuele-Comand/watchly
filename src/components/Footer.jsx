import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-white text-black mt-20">
      <Container>
        <div className="flex justify-start items-start py-20 gap-10">
          <div className="w-64 h-64 flex items-center justify-start">
            <img
              src="src/assets/Watchly nero.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col h-64 items-start justify-center w-56">
            <h1 className="text-2xl font-bold mb-4">Useful Links</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Review</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
            <div className="mt-auto pt-4">
              <p className="text-xs text-gray-500">Stay connected with us</p>
            </div>
          </div>
          <div className="flex flex-col h-64 items-start justify-center w-48">
            <h1 className="text-2xl font-bold mb-4">Carreers</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Engineering</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <div className="mt-auto pt-4">
              <p className="text-xs text-gray-500">Join our team today</p>
            </div>
          </div>
          <div className="flex flex-col h-64 items-start justify-center w-48">
            <h1 className="text-2xl font-bold mb-4">Resources</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
            </ul>
            <div className="mt-auto pt-4">
              <p className="text-xs text-gray-500">Explore our resources</p>
            </div>
          </div>
          <div className="flex flex-col h-64 items-start justify-center w-64">
            <h1 className="text-2xl font-bold mb-2">Subscribe</h1>
            <p className="mb-2 text-sm">Join our community</p>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Enter your email..."
                className="bg-[#F7F4F4] rounded-full p-2 border border-[#E5E5E5] text-sm"
              />
              <button className="bg-black text-white rounded-full p-2 text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              By subscribing you agree to our Privacy Policy
            </p>
            <div className="mt-auto pt-4">
              <p className="text-xs text-gray-500">Get the latest updates</p>
            </div>
          </div>
        </div>
        <p className="text-center font-semibold">
          Designed and developed by Emanuele Comand - @ All rigths deserved{" "}
        </p>
      </Container>
    </div>
  );
};

export default Footer;
