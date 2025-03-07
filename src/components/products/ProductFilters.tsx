
import { useState } from "react";
import { Filter } from "lucide-react";
import FilterSection from "./FilterSection";
import { priceRanges, brands, carMakes } from "@/lib/filter-data";
import { FilterOption } from "./FilterSection";

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters = ({ onFilterChange }: ProductFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    brand: true,
    make: true,
  });
  
  const [selectedPrices, setSelectedPrices] = useState<string[]>(["price-all"]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };
  
  const handlePriceChange = (values: string[]) => {
    if (values.includes("price-all")) {
      setSelectedPrices(["price-all"]);
    } else {
      setSelectedPrices(values.filter(v => v !== "price-all"));
    }
    
    applyFilters(values, selectedBrands, selectedMakes);
  };
  
  const handleBrandChange = (values: string[]) => {
    setSelectedBrands(values);
    applyFilters(selectedPrices, values, selectedMakes);
  };
  
  const handleMakeChange = (values: string[]) => {
    setSelectedMakes(values);
    applyFilters(selectedPrices, selectedBrands, values);
  };
  
  const applyFilters = (
    prices: string[], 
    brandIds: string[], 
    makeIds: string[]
  ) => {
    // Get actual price range values from selected price IDs
    const priceRangeValues = prices.includes("price-all") 
      ? [priceRanges[0].value] 
      : prices.map(id => {
          const range = priceRanges.find(r => r.id === id);
          return range ? range.value : null;
        }).filter(Boolean);
        
    // Get actual brand names from selected brand IDs
    const brandValues = brandIds.map(id => {
      const brand = brands.find(b => b.id === id);
      return brand ? brand.label : null;
    }).filter(Boolean) as string[];
    
    // Get actual make names from selected make IDs
    const makeValues = makeIds.map(id => {
      const make = carMakes.find(m => m.id === id);
      return make ? make.label : null;
    }).filter(Boolean) as string[];
    
    onFilterChange({
      price: priceRangeValues,
      brands: brandValues,
      makes: makeValues,
    });
  };
  
  const resetFilters = () => {
    setSelectedPrices(["price-all"]);
    setSelectedBrands([]);
    setSelectedMakes([]);
    
    onFilterChange({
      price: [priceRanges[0].value],
      brands: [],
      makes: [],
    });
  };
  
  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden mb-4">
        <button 
          className="w-full flex items-center justify-center space-x-2 bg-automod-gray text-white py-3 px-4 rounded"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>
      
      {/* Filter sidebar */}
      <div className={`${
        isMobileFiltersOpen ? 'block' : 'hidden'
      } md:block bg-automod-gray rounded-lg p-4`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Filters</h3>
          <button 
            className="text-sm text-automod-red hover:underline"
            onClick={resetFilters}
          >
            Reset All
          </button>
        </div>
        
        <FilterSection 
          title="Price Range"
          options={priceRanges}
          selectedValues={selectedPrices}
          onChange={handlePriceChange}
          isOpen={expandedSections.price}
          onToggle={() => toggleSection('price')}
        />
        
        <FilterSection 
          title="Brand"
          options={brands}
          selectedValues={selectedBrands}
          onChange={handleBrandChange}
          isOpen={expandedSections.brand}
          onToggle={() => toggleSection('brand')}
        />
        
        <FilterSection 
          title="Car Make"
          options={carMakes}
          selectedValues={selectedMakes}
          onChange={handleMakeChange}
          isOpen={expandedSections.make}
          onToggle={() => toggleSection('make')}
        />
      </div>
    </>
  );
};

export default ProductFilters;
