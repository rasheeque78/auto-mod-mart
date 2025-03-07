
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import { ArrowUpDown, Grid3X3, List } from "lucide-react";

// Import mock product data from the FeaturedProducts component
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

// Add more products to have a fuller page
const extraProducts = [
  {
    id: 9,
    name: "Racing Steering Wheel",
    price: 349.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2825&auto=format&fit=crop",
    isNew: false,
    isSale: false,
    category: "interior",
  },
  {
    id: 10,
    name: "Cold Air Intake System",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=2874&auto=format&fit=crop",
    isNew: true,
    isSale: false,
    category: "performance",
  },
  {
    id: 11,
    name: "Front Lip Spoiler",
    price: 249.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2825&auto=format&fit=crop",
    isNew: false,
    isSale: true,
    salePrice: 199.99,
    category: "body-kits",
  },
  {
    id: 12,
    name: "LED Underbody Light Kit",
    price: 199.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1557411732-1797a9171fcf?q=80&w=2070&auto=format&fit=crop",
    isNew: false,
    isSale: false,
    category: "lighting",
  },
];

const allProducts = [...products, ...extraProducts];

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';

const ProductListing = () => {
  const { category } = useParams<{ category: string }>();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category if specified
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => {
          const aPrice = a.isSale && a.salePrice ? a.salePrice : a.price;
          const bPrice = b.isSale && b.salePrice ? b.salePrice : b.price;
          return aPrice - bPrice;
        });
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => {
          const aPrice = a.isSale && a.salePrice ? a.salePrice : a.price;
          const bPrice = b.isSale && b.salePrice ? b.salePrice : b.price;
          return bPrice - aPrice;
        });
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => (a.isNew ? -1 : 1));
        break;
      default: // 'featured' is default
        // No sorting needed - already in featured order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [category, sortBy]);
  
  const handleFilterChange = (filters: any) => {
    let filtered = allProducts;
    
    // Filter by category if specified in URL
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filter by price ranges
    if (filters.price && filters.price.length) {
      filtered = filtered.filter(product => {
        const productPrice = product.isSale && product.salePrice 
          ? product.salePrice 
          : product.price;
          
        return filters.price.some((range: number[]) => 
          productPrice >= range[0] && productPrice <= range[1]
        );
      });
    }
    
    // More filters can be applied here...
    
    setFilteredProducts(filtered);
  };
  
  const getCategoryTitle = () => {
    if (!category) return "All Products";
    
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{getCategoryTitle()}</h1>
            <p className="text-gray-400">
              Showing {filteredProducts.length} products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="md:col-span-1">
              <ProductFilters onFilterChange={handleFilterChange} />
            </div>
            
            {/* Product grid */}
            <div className="md:col-span-3">
              {/* Sort and view options */}
              <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
                <div className="flex items-center">
                  <label className="text-gray-400 mr-2">Sort by:</label>
                  <select 
                    className="bg-automod-gray border border-automod-light-gray text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-automod-red"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-automod-red text-white' : 'bg-automod-gray text-gray-300'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button 
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-automod-red text-white' : 'bg-automod-gray text-gray-300'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="bg-automod-gray p-8 rounded-lg text-center">
                  <ArrowUpDown size={48} className="mx-auto text-gray-500 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-400">
                    Try adjusting your filters or search criteria.
                  </p>
                </div>
              ) : (
                <div className={`grid ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                } gap-6`}>
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListing;
