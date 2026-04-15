// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='container mx-auto px-4 2xl:px-20 py-20 my-5  mt-20 mb-0 flex  items-center justify-between gap-4'>
//         <img src={assets.logo} />
//         <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All rights reserved || 2025 || Job Portal</p>
//         <div className='flex gap-4'>
//             <img width={38} src={assets.facebook_icon}/>
//             <img width={38} src={assets.instagram_icon}/>
//             <img width={38} src={assets.twitter_icon}/>

//         </div>
//     </div>
//   )
// }

// export default Footer
import logo from "../assets/logo12345.png";

const Footer = () => {
<<<<<<< HEAD
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300 bg-black">
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                
                {/* Left Section */}
                <div className="md:max-w-96">
                    <img
                        alt="QuickAI logo"
                        className="h-11"
                        src={logo}
                    />

                 <p className="mt-6 text-sm leading-relaxed hover:text-pink-500">
  QuickAI is an AI-powered multi-tool platform designed for creative and professional tasks, helping users work faster and smarter.
</p>

                    {/* Optional App Buttons */}
                    <div className="flex items-center gap-2 mt-4">
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                            alt="Google Play"
                            className="h-10 w-auto border border-white rounded"
                        />
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                            alt="App Store"
                            className="h-10 w-auto border border-white rounded"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col sm:flex-row items-start md:justify-end gap-10 md:gap-20">
                    
                    {/* Company Links */}
                    <div>
                        <h2 className="font-semibold mb-5 text-red-500">History of QuickAI</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="https://portfolio-coder-56.vercel.app/" className="hover:text-pink-500">portfolio 🫰</a></li>
                            <li><a href="https://chatapplive-xzgd.onrender.com/" className="hover:text-pink-500">Chat Application 💬</a></li>
                            <li><a href="https://github.com/subashSN-56" className="hover:text-pink-500">Git Hub 🌟</a></li>
                            <li><a href="https://www.linkedin.com/in/subash-d-2804b2302" className="hover:text-pink-500">LinkedIn 🌐</a></li>
                            <li><a href="https://leetcode.com/u/subash56/" className="hover:text-pink-500">LeetCode 🧠</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-semibold mb-5 text-red-500">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p className="hover:text-pink-500">+91 85248 81862 📞</p>
                            <p className="hover:text-pink-500">subashdev1546@gmail.com 📧</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <p className="pt-4 text-center text-sm pb-5">
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-white">QuickAI  </span>. 
                All rights reserved.
            </p>

        </footer>
    );
};

export default Footer;
=======
  return (
    <footer className="bg-gray-500 text-white pt-16 pb-6 mt-20">
      
      {/* Top Section */}
      <div className="container mx-auto px-6 2xl:px-20 grid md:grid-cols-3 gap-10">
        
        {/* Left - Logo & Description */}
        <div>
          <img src={assets.logo} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm leading-6">
            Your Job Portal helps users find jobs faster and smarter with 
            modern tools and seamless experience.
          </p>

          {/* App Buttons */}
          <div className="flex gap-4 mt-5">
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              Google Play
            </button>
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              App Store
            </button>
          </div>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">
            History / Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">

  <li>
    <a href="https://roshan-chat-app.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
      Chat Application💬
    </a>
  </li>

  <li>
    <a href="https://github.com/roshan21-ui" target="_blank" rel="noopener noreferrer" className="hover:text-white">
      GitHub🌟
    </a>
  </li>
  <li>
    <a href="https://leetcode.com/Roshan_212004/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
      LeetCode🤔
    </a>
  </li>
</ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            📞 +91 9344749978
          </p>
          <p className="text-gray-400 text-sm">
            ✉️ kiruthickroshan21@gmail.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2026 Job Portal. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
>>>>>>> 8ebdb71bff096b95520acdeff529e05b48ba39d9
