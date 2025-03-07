
interface CartSummaryProps {
  subtotal: number;
  onCheckout: () => void;
}

const CartSummary = ({ subtotal, onCheckout }: CartSummaryProps) => {
  const shipping = subtotal > 0 ? 12.99 : 0;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-automod-gray rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6 text-white">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-automod-light-gray pt-3 mt-3">
          <div className="flex justify-between font-bold text-white">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button 
        className="btn-primary w-full py-3"
        onClick={onCheckout}
        disabled={subtotal <= 0}
      >
        Proceed to Checkout
      </button>
      
      <div className="mt-6">
        <div className="text-sm text-gray-400 mb-4">
          We accept the following payment methods
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-6 bg-white/10 rounded"></div>
          <div className="w-10 h-6 bg-white/10 rounded"></div>
          <div className="w-10 h-6 bg-white/10 rounded"></div>
          <div className="w-10 h-6 bg-white/10 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
