import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 lg:px-36 pt-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">
        {/* Logo & Description */}
        <div className="md:max-w-[400px]">
          <img src={assets.logo} alt="QuickShow Logo" className="h-11" />
          <p className="mt-4 text-sm leading-relaxed">
            QuickShow is your go-to app for booking movie tickets quickly and easily. Browse trailers, check showtimes, and book your seat in seconds!
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img src={assets.googlePlay} alt="Google Play" className="h-10 w-auto" />
            <img src={assets.appStore} alt="App Store" className="h-10 w-auto" />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-10 md:gap-20">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-4">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@quickshow.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="pt-6 text-center text-sm pb-6">
        Copyright {new Date().getFullYear()} © QuickShow. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
