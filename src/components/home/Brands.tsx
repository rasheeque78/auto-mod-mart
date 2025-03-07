
import { useRef, useEffect } from "react";

// Mock brand data
const brands = [
  { id: 1, name: "Brand 1", logo: "https://via.placeholder.com/150x80?text=Brand+1" },
  { id: 2, name: "Brand 2", logo: "https://via.placeholder.com/150x80?text=Brand+2" },
  { id: 3, name: "Brand 3", logo: "https://via.placeholder.com/150x80?text=Brand+3" },
  { id: 4, name: "Brand 4", logo: "https://via.placeholder.com/150x80?text=Brand+4" },
  { id: 5, name: "Brand 5", logo: "https://via.placeholder.com/150x80?text=Brand+5" },
  { id: 6, name: "Brand 6", logo: "https://via.placeholder.com/150x80?text=Brand+6" },
  { id: 7, name: "Brand 7", logo: "https://via.placeholder.com/150x80?text=Brand+7" },
  { id: 8, name: "Brand 8", logo: "https://via.placeholder.com/150x80?text=Brand+8" },
  { id: 9, name: "Brand 9", logo: "https://via.placeholder.com/150x80?text=Brand+9" },
  { id: 10, name: "Brand 10", logo: "https://via.placeholder.com/150x80?text=Brand+10" },
];

const Brands = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    // Clone the content for continuous scrolling
    scrollerInnerRef.current.innerHTML += scrollerInnerRef.current.innerHTML;
  }, []);

  return (
    <section className="py-16 bg-automod-gray">
      <div className="container">
        <h2 className="section-title text-center mb-10">Brands We Carry</h2>

        <div className="overflow-hidden" ref={scrollerRef}>
          <div className="flex animate-marquee" ref={scrollerInnerRef}>
            {brands.map((brand) => (
              <div key={brand.id} className="flex-none mx-6">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
