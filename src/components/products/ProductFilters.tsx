
import { useState } from "react";
import { Check, ChevronDown, Filter } from "lucide-react";

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const priceRanges = [
  { id: "price-all", label: "All Prices", value: [0, 5000] },
  { id: "price-1", label: "Under $100", value: [0, 100] },
  { id: "price-2", label: "$100 - $500", value: [100, 500] },
  { id: "price-3", label: "$500 - $1,000", value: [500, 1000] },
  { id: "price-4", label: "$1,000 - $2,000", value: [1000, 2000] },
  { id: "price-5", label: "$2,000+", value: [2000, 5000] },
];

const brands = [
  { id: "brand-1", label: "AeroWerks" },
  { id: "brand-2", label: "TurboMax" },
  { id: "brand-3", label: "RaceTech" },
  { id: "brand-4", label: "SpeedForce" },
  { id: "brand-5", label: "StrictlyForeign" },
  { id: "brand-6", label: "MuscleGrip" },
  { id: "brand-7", label: "DriftKing" },
];

const carMakes = [
  { id: "make-1", label: "Honda" },
  { id: "make-2", label: "Toyota" },
  { id: "make-3", label: "BMW" },
  { id: "make-4", label: "Mercedes-Benz" },
  { id: "make-5", label: "Ford" },
  { id: "make-6", label: "Chevrolet" },
  { id: "make-7", label: "Subaru" },
  { id: "make-8", label: "Nissan" },
];

const FilterSection = ({ 
  title, 
  options, 
  selectedValues, 
  onChange,
  isOpen,
  onToggle,
}: { 
  title: string;
  options: { id: string; label: string; value?: any }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-automod-light-gray pb-4">
      <button 
        className="flex justify-between items-center w-full py-3"
        onClick={onToggle}
      >
        <span className="font-medium text-white">{title}</span>
        <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="mt-2 space-y-2">
          {options.map((option) => (
            <label 
              key={option.id} 
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div 
                className={`w-5 h-5 border ${
                  selectedValues.includes(option.id) 
                    ? 'bg-automod-red border-automod-red' 
                    : 'border-gray-500'
                } rounded flex items-center justify-center`}
                onClick={() => {
                  const newValues = selectedValues.includes(option.id)
                    ? selectedValues.filter(id => id !== option.id)
                    : [...selectedValues, option.id];
                  onChange(newValues);
                }}
              >
                {selectedValues.includes(option.id) && (
                  <Check size={14} className="text-white" />
                )}
              </div>
              <span className="text-gray-300">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

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
    brands: string[], 
    makes: string[]
  ) => {
    // Get actual price range values from selected price IDs
    const priceRangeValues = prices.includes("price-all") 
      ? [priceRanges[0].value] 
      : prices.map(id => {
          const range = priceRanges.find(r => r.id === id);
          return range ? range.value : null;
        }).filter(Boolean);
        
    // Fix: Get actual brand names from IDs
    const brandValues = brands.map(id => {
      const brand = brands.find(b => b.id === id);
      return brand ? brand.label : null;
    }).filter(Boolean) as string[];
    
    // Fix: Get actual make names from IDs
    const makeValues = makes.map(id => {
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
