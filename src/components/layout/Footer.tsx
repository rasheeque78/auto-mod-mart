
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automod-dark pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-xl font-bold text-white">
                <span className="text-automod-red">AUTO</span>MOD MART
              </h2>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop shop for premium car modification parts. Elevate your ride with top-quality performance upgrades and styling accessories.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/body-kits" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Body Kits
                </Link>
              </li>
              <li>
                <Link to="/products/exhaust-systems" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Exhaust Systems
                </Link>
              </li>
              <li>
                <Link to="/products/wheels" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Wheels & Rims
                </Link>
              </li>
              <li>
                <Link to="/products/lighting" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-automod-light-gray mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Auto Mod Mart. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6 w-auto" />
              <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6 w-auto" />
              <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6 w-auto" />
              <img src="https://via.placeholder.com/40x25" alt="Apple Pay" className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
