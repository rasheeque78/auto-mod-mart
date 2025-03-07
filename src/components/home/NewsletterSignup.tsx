
import { useState } from "react";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-automod-dark to-automod-gray">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={36} className="text-automod-red mx-auto mb-4" />
          <h2 className="section-title">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Stay updated with the latest products, special offers, and automotive news.
          </p>
          
          {message ? (
            <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg">
              {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 bg-automod-light-gray border border-automod-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-automod-red text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-6 py-3 whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
