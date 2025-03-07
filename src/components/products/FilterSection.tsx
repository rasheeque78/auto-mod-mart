
import { Check, ChevronDown } from "lucide-react";

export interface FilterOption {
  id: string;
  label: string;
  value?: any;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterSection = ({ 
  title, 
  options, 
  selectedValues, 
  onChange,
  isOpen,
  onToggle,
}: FilterSectionProps) => {
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

export default FilterSection;
