
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ChevronDown, ExternalLink } from "lucide-react";

// Mock order data
const orders = [
  {
    id: "ORD-10025",
    date: "2023-04-15",
    status: "Delivered",
    total: 1599.98,
    items: [
      { id: 1, name: "Carbon Fiber Hood", price: 899.99, quantity: 1 },
      { id: 5, name: "Coilover Suspension Kit", price: 699.99, quantity: 1 }
    ],
    trackingNumber: "TRK123456789"
  },
  {
    id: "ORD-10018",
    date: "2023-03-22",
    status: "Shipped",
    total: 499.99,
    items: [
      { id: 4, name: "LED Headlight Kit", price: 499.99, quantity: 1 }
    ],
    trackingNumber: "TRK987654321"
  },
  {
    id: "ORD-10012",
    date: "2023-02-08",
    status: "Delivered",
    total: 1299.99,
    items: [
      { id: 2, name: "Performance Exhaust System", price: 1299.99, quantity: 1 }
    ],
    trackingNumber: "TRK456789123"
  }
];

const statusColors = {
  "Pending": "bg-yellow-500/20 text-yellow-400",
  "Processing": "bg-blue-500/20 text-blue-400",
  "Shipped": "bg-purple-500/20 text-purple-400",
  "Delivered": "bg-green-500/20 text-green-400",
  "Cancelled": "bg-red-500/20 text-red-400",
};

const AccountOrders = () => {
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);
  
  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId) 
        : [...prev, orderId]
    );
  };
  
  return (
    <div className="bg-automod-gray rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Order History</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">You haven't placed any orders yet.</p>
          <Link to="/products" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border border-automod-light-gray rounded-lg overflow-hidden">
              {/* Order summary row */}
              <div className="p-4 flex flex-col md:flex-row md:items-center justify-between bg-automod-dark">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3 md:mb-0">
                  <span className="text-white font-medium">{order.id}</span>
                  <span className="text-sm text-gray-400">
                    {new Date(order.date).toLocaleDateString()}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium">
                    ${order.total.toFixed(2)}
                  </span>
                  <button 
                    className="flex items-center text-automod-red hover:text-red-400 transition-colors"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    <span className="mr-1">Details</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${
                        expandedOrders.includes(order.id) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
              </div>
              
              {/* Order details (expanded) */}
              {expandedOrders.includes(order.id) && (
                <div className="p-4 border-t border-automod-light-gray">
                  <h4 className="text-sm text-gray-400 mb-3">Order Items</h4>
                  
                  <div className="space-y-3 mb-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Link 
                            to={`/product/${item.id}`} 
                            className="text-white hover:text-automod-red transition-colors"
                          >
                            {item.name}
                          </Link>
                          <span className="text-sm text-gray-400">x{item.quantity}</span>
                        </div>
                        <span className="text-white">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-automod-light-gray pt-3 mt-3 flex flex-col sm:flex-row justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Tracking Number</p>
                      <div className="flex items-center">
                        <span className="text-white">{order.trackingNumber}</span>
                        {order.status === "Shipped" || order.status === "Delivered" ? (
                          <a 
                            href="#"
                            className="ml-2 text-automod-red hover:text-red-400 flex items-center"
                          >
                            <span className="text-sm">Track</span>
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to={`/order/${order.id}`}
                        className="px-3 py-1.5 bg-automod-light-gray text-white rounded hover:bg-automod-red transition-colors flex items-center text-sm"
                      >
                        <Eye size={14} className="mr-1" />
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountOrders;
