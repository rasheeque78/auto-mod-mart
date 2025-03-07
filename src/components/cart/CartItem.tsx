
import { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setIsUpdating(true);
    setTimeout(() => {
      onUpdateQuantity(id, newQuantity);
      setIsUpdating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-automod-light-gray">
      {/* Product image */}
      <div className="w-24 h-24 flex-shrink-0 bg-automod-light-gray rounded overflow-hidden mr-4 mb-4 sm:mb-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      
      {/* Product info */}
      <div className="flex-grow mr-4">
        <Link 
          to={`/product/${id}`}
          className="text-white hover:text-automod-red font-medium transition-colors"
        >
          {name}
        </Link>
        <div className="text-gray-400 text-sm mt-1">Item #: {id.toString().padStart(6, '0')}</div>
      </div>
      
      {/* Quantity selector */}
      <div className="flex items-center border border-automod-light-gray rounded-md overflow-hidden my-4 sm:my-0 sm:mx-4">
        <button 
          className="p-2 hover:bg-automod-light-gray transition-colors" 
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={isUpdating || quantity <= 1}
        >
          <Minus size={16} className="text-gray-400" />
        </button>
        <span className="px-4 py-1 text-white">
          {isUpdating ? "..." : quantity}
        </span>
        <button 
          className="p-2 hover:bg-automod-light-gray transition-colors" 
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={isUpdating}
        >
          <Plus size={16} className="text-gray-400" />
        </button>
      </div>
      
      {/* Price */}
      <div className="text-white font-medium min-w-[80px] text-right mr-4">
        ${(price * quantity).toFixed(2)}
      </div>
      
      {/* Remove button */}
      <button 
        className="text-gray-400 hover:text-automod-red transition-colors p-2"
        onClick={() => onRemove(id)}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;
