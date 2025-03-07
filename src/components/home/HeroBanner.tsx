
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?q=80&w=2874&auto=format&fit=crop')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transform Your Ride
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Premium performance parts and accessories to elevate your vehicle's
            style and power.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary flex items-center">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/build-guide" className="btn-secondary flex items-center">
              Build Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-0.5 h-8 bg-white/50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
