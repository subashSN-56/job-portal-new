import logo from "../assets/logo12345.png";

const Footer = () => {
  return (
    <footer className="px-6 pt-10 md:px-16 lg:px-36 w-full text-gray-300 bg-black mt-20">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">

        {/* Left */}
        <div className="md:max-w-96">
          <img src={logo} alt="QuickAI logo" className="h-11" />

          <p className="mt-6 text-sm leading-relaxed hover:text-pink-500">
            QuickAI is an AI-powered multi-tool platform designed for creative
            and professional tasks, helping users work faster and smarter.
          </p>

          <div className="flex gap-4 mt-5">
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              Google Play
            </button>
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              App Store
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold mb-5 text-red-500">History / Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="https://portfolio-coder-56.vercel.app/" className="hover:text-pink-500">
                Portfolio 🫰
              </a>
            </li>
            <li>
              <a href="https://chatapplive-xzgd.onrender.com/" className="hover:text-pink-500">
                Chat App 💬
              </a>
            </li>
            <li>
              <a href="https://github.com/subashSN-56" className="hover:text-pink-500">
                GitHub 🌟
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/subash56/" className="hover:text-pink-500">
                LeetCode 🧠
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-5 text-red-500">Get in Touch</h2>
          <p className="text-sm hover:text-pink-500">📞 +91 85248 81862</p>
          <p className="text-sm hover:text-pink-500">📧 subashdev1546@gmail.com</p>
        </div>

      </div>

      {/* Bottom */}
      <p className="pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">QuickAI</span>. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;