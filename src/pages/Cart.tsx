
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: "Carbon Fiber Hood",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1600377640203-d01dce341dec?q=80&w=2070&auto=format&fit=crop",
    quantity: 1,
  },
  {
    id: 5,
    name: "Coilover Suspension Kit",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1586168738152-749be4d6021c?q=80&w=2868&auto=format&fit=crop",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate();
  
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center mb-2">
              <ShoppingCart className="mr-4" size={32} />
              Your Cart
            </h1>
            <p className="text-gray-400">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="bg-automod-gray p-8 rounded-lg text-center">
              <ShoppingCart size={64} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-400 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products" className="btn-primary inline-flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-automod-gray rounded-lg p-6">
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id}
                      {...item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                  
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-automod-light-gray">
                    <Link to="/products" className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <ArrowLeft size={16} className="mr-2" />
                      Continue Shopping
                    </Link>
                    <button 
                      className="text-automod-red hover:text-red-400 transition-colors"
                      onClick={() => setCartItems([])}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <CartSummary 
                  subtotal={calculateSubtotal()}
                  onCheckout={handleCheckout}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
