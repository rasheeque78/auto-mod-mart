
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "I've purchased several body kits from Auto Mod Mart and the quality is exceptional. The fitment is perfect and installation was straightforward with their detailed guides.",
    car: "2018 Subaru WRX STI",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "The LED lighting kit completely transformed the look of my car. Customer service was incredibly helpful when I had questions about the installation process.",
    car: "2020 Honda Civic Type R",
  },
  {
    id: 3,
    name: "David Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    text: "The wheels I ordered arrived quickly and look even better in person. They've made a huge difference in my car's stance and handling. Would definitely shop here again.",
    car: "2019 Ford Mustang GT",
  },
  {
    id: 4,
    name: "Emily Chen",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    text: "The performance exhaust system has given my car an incredible sound and a noticeable boost in power. Shipping was fast and packaging was secure.",
    car: "2021 BMW M3",
  },
  {
    id: 5,
    name: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=67",
    rating: 4,
    text: "I've been upgrading my project car with parts exclusively from Auto Mod Mart. The prices are competitive and the quality is consistently top-notch.",
    car: "2017 Nissan 370Z",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-automod-gray p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.car}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-500"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300">{testimonial.text}</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-automod-dark">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-automod-gray hover:bg-automod-light-gray transition-colors"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-automod-gray hover:bg-automod-light-gray transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
