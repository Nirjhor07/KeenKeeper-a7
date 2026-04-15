import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2d5b49] text-white py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Title */}
        <h1 className="text-5xl font-bold">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-200 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div>
          <p className="font-semibold mb-3">Social Links</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
              <FaYoutube />
            </button>

            <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </button>

            <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
              <FaXTwitter />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 pt-10 border-t border-gray-500 mt-10">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
