
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import Brands from "@/components/home/Brands";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedCategories />
        <FeaturedProducts />
        <Testimonials />
        <Brands />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
