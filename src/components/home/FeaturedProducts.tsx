
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock product data
const products = [
  {
    id: 1,
    name: "Carbon Fiber Hood",
    price: 899.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600377640203-d01dce341dec?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
    isSale: false,
    category: "body-kits",
  },
  {
    id: 2,
    name: "Performance Exhaust System",
    price: 1299.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551522355-5f8f95a69905?q=80&w=2070&auto=format&fit=crop",
    isNew: false,
    isSale: true,
    salePrice: 999.99,
    category: "exhaust-systems",
  },
  {
    id: 3,
    name: "20\" Sport Alloy Wheels",
    price: 1599.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1626129970784-1b8c5a4368f6?q=80&w=2942&auto=format&fit=crop",
    isNew: false,
    isSale: false,
    category: "wheels",
  },
  {
    id: 4,
    name: "LED Headlight Kit",
    price: 499.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1485463976612-f9e158cedcd6?q=80&w=2825&auto=format&fit=crop",
    isNew: true,
    isSale: false,
    category: "lighting",
  },
  {
    id: 5,
    name: "Coilover Suspension Kit",
    price: 1199.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586168738152-749be4d6021c?q=80&w=2868&auto=format&fit=crop",
    isNew: false,
    isSale: true,
    salePrice: 999.99,
    category: "suspension",
  },
  {
    id: 6,
    name: "Sport Bucket Seats",
    price: 899.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1504222490429-c075f197f044?q=80&w=2070&auto=format&fit=crop",
    isNew: false,
    isSale: false,
    category: "interior",
  },
  {
    id: 7,
    name: "Performance Brake Kit",
    price: 799.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1576587118816-8a1d99815ce5?q=80&w=2944&auto=format&fit=crop",
    isNew: true,
    isSale: false,
    category: "performance",
  },
  {
    id: 8,
    name: "Turbo Upgrade Kit",
    price: 2499.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1580974511812-4b27692fd580?q=80&w=2832&auto=format&fit=crop",
    isNew: false,
    isSale: true,
    salePrice: 1999.99,
    category: "performance",
  },
];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-blue-500 text-white">New</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-automod-red text-white">Sale</Badge>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full btn-primary flex items-center justify-center space-x-2">
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link 
            to={`/product/${product.id}`}
            className="text-lg font-medium text-white hover:text-automod-red transition-colors truncate max-w-[80%]"
          >
            {product.name}
          </Link>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-400 ml-1">{product.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {product.isSale ? (
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-white">${product.salePrice.toFixed(2)}</span>
              <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
          )}
          <Link 
            to={`/products/${product.category}`}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProducts = activeTab === "all" 
    ? products.slice(0, 8) 
    : products.filter(product => 
        activeTab === "new" 
          ? product.isNew 
          : activeTab === "sale" 
            ? product.isSale 
            : product.category === activeTab
      ).slice(0, 8);

  const tabs = [
    { id: "all", label: "All" },
    { id: "new", label: "New Arrivals" },
    { id: "sale", label: "On Sale" },
    { id: "body-kits", label: "Body Kits" },
    { id: "performance", label: "Performance" },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="section-title mb-4 md:mb-0">Featured Products</h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === tab.id
                    ? "bg-automod-red text-white"
                    : "bg-automod-gray text-gray-300 hover:bg-automod-light-gray"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/products" className="btn-primary inline-flex items-center">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
