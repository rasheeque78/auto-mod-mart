
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Body Kits", href: "/products/body-kits" },
  { name: "Exhaust Systems", href: "/products/exhaust-systems" },
  { name: "Wheels & Rims", href: "/products/wheels" },
  { name: "Lighting", href: "/products/lighting" },
  { name: "Suspension", href: "/products/suspension" },
  { name: "Performance", href: "/products/performance" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-automod-dark py-4 sticky top-0 z-50 shadow-md">
      <div className="container flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-automod-red">AUTO</span>MOD MART
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/search" className="text-gray-300 hover:text-white">
            <Search size={20} />
          </Link>
          <Link to="/account" className="text-gray-300 hover:text-white">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-gray-300 hover:text-white relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-automod-red text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                {cartCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-automod-dark border-t border-automod-light-gray mt-4">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
