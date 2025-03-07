
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Body Kits",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2825&auto=format&fit=crop",
    href: "/products/body-kits",
  },
  {
    id: 2,
    name: "Exhaust Systems",
    image: "https://images.unsplash.com/photo-1580274437636-1c384e990028?q=80&w=2564&auto=format&fit=crop",
    href: "/products/exhaust-systems",
  },
  {
    id: 3,
    name: "Wheels & Rims",
    image: "https://images.unsplash.com/photo-1611921059673-825tajkc3d0?q=80&w=2835&auto=format&fit=crop",
    href: "/products/wheels",
  },
  {
    id: 4,
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1557411732-1797a9171fcf?q=80&w=2070&auto=format&fit=crop",
    href: "/products/lighting",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-automod-dark">
      <div className="container">
        <h2 className="section-title text-center mb-12">Shop By Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group overflow-hidden rounded-lg relative h-64"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <span className="inline-block text-sm text-white mt-2 border-b border-transparent group-hover:border-white transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
