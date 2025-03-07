
import { useState } from "react";
import { X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// Mock wishlist data
const initialWishlistItems = [
  {
    id: 3,
    name: "20\" Sport Alloy Wheels",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1626129970784-1b8c5a4368f6?q=80&w=2942&auto=format&fit=crop",
    category: "wheels",
    inStock: true,
  },
  {
    id: 7,
    name: "Performance Brake Kit",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1576587118816-8a1d99815ce5?q=80&w=2944&auto=format&fit=crop",
    category: "performance",
    inStock: true,
  },
  {
    id: 8,
    name: "Turbo Upgrade Kit",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1580974511812-4b27692fd580?q=80&w=2832&auto=format&fit=crop",
    category: "performance",
    inStock: false,
  },
];

const AccountWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  
  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };
  
  return (
    <div className="bg-automod-gray rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">My Wishlist</h2>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">Your wishlist is empty.</p>
          <Link to="/products" className="btn-primary">
            Discover Products
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-automod-light-gray rounded-lg bg-automod-dark">
              {/* Product image */}
              <div className="w-full sm:w-20 h-20 rounded overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Product info */}
              <div className="flex-grow">
                <Link 
                  to={`/product/${item.id}`}
                  className="text-white hover:text-automod-red transition-colors font-medium"
                >
                  {item.name}
                </Link>
                <div className="flex flex-wrap gap-2 items-center mt-1">
                  <span className="text-automod-red font-medium">${item.price.toFixed(2)}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    item.inStock 
                      ? 'bg-green-900/30 text-green-400' 
                      : 'bg-yellow-900/30 text-yellow-400'
                  }`}>
                    {item.inStock ? 'In Stock' : 'Back Order'}
                  </span>
                  <Link 
                    to={`/products/${item.category}`}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                <button 
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-1.5 bg-automod-red text-white rounded hover:bg-red-700 transition-colors"
                  disabled={!item.inStock}
                >
                  <ShoppingCart size={16} />
                  <span className="text-sm">Add to Cart</span>
                </button>
                <button 
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-1.5 border border-automod-light-gray text-white rounded hover:bg-automod-light-gray transition-colors"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <X size={16} />
                  <span className="text-sm">Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountWishlist;
