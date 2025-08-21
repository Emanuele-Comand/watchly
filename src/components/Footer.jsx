import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-white text-black mt-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-start items-start py-10 lg:py-20 gap-8 lg:gap-10">
          <div className="w-full lg:w-64 h-32 lg:h-64 flex items-center justify-center lg:justify-start">
            <img
              src="/assets/Watchly nero.png"
              alt="Watchly Logo"
              className="w-24 h-24 lg:w-32 lg:h-32"
            />
          </div>

          <div className="flex flex-col h-auto lg:h-64 items-center lg:items-start justify-center w-full lg:w-56 text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">Useful Links</h1>
            <ul className="flex flex-col gap-2 mb-4 lg:mb-0">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  About us
                </a>
              </li>
            </ul>
            <div className="lg:mt-auto lg:pt-4">
              <p className="text-xs text-gray-500">Stay connected with us</p>
            </div>
          </div>

          <div className="flex flex-col h-auto lg:h-64 items-center lg:items-start justify-center w-full lg:w-48 text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">Carreers</h1>
            <ul className="flex flex-col gap-2 mb-4 lg:mb-0">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
            <div className="lg:mt-auto lg:pt-4">
              <p className="text-xs text-gray-500">Join our team today</p>
            </div>
          </div>

          <div className="flex flex-col h-auto lg:h-64 items-center lg:items-start justify-center w-full lg:w-48 text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">Resources</h1>
            <ul className="flex flex-col gap-2 mb-4 lg:mb-0">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Social Media
                </a>
              </li>
            </ul>
            <div className="lg:mt-auto lg:pt-4">
              <p className="text-xs text-gray-500">Explore our resources</p>
            </div>
          </div>

          <div className="flex flex-col h-auto lg:h-64 items-center lg:items-start justify-center w-full lg:w-64 text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-bold mb-2">Subscribe</h1>
            <p className="mb-4 lg:mb-2 text-sm">Join our community</p>
            <div className="flex flex-col sm:flex-row gap-2 mb-4 lg:mb-2 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Enter your email..."
                className="bg-[#F7F4F4] rounded-full p-2 border border-[#E5E5E5] text-sm w-full sm:w-auto"
              />
              <button className="bg-black text-white rounded-full p-2 text-sm hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4 lg:mb-2 px-4 lg:px-0">
              By subscribing you agree to our Privacy Policy
            </p>
            <div className="lg:mt-auto lg:pt-4">
              <p className="text-xs text-gray-500">Get the latest updates</p>
            </div>
          </div>
        </div>

        <div className="border-t pb-8 border-gray-200 pt-6 lg:pt-8">
          <p className="text-center font-semibold text-sm lg:text-base">
            Designed and developed by Emanuele Comand - @ All rigths deserved{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
