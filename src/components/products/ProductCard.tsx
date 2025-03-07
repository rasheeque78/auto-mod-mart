
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    salePrice?: number;
    rating: number;
    image: string;
    isNew?: boolean;
    isSale?: boolean;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
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
          <div className="grid grid-cols-2 gap-2">
            <button className="btn-primary flex items-center justify-center">
              <ShoppingCart size={16} />
            </button>
            <button className="bg-automod-gray text-white hover:bg-automod-light-gray transition-colors font-medium py-2 rounded flex items-center justify-center">
              <Heart size={16} />
            </button>
          </div>
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
              <span className="text-lg font-bold text-white">${product.salePrice?.toFixed(2)}</span>
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

export default ProductCard;
