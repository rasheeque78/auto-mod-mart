
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, Settings, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AccountProfile from "@/components/account/AccountProfile";
import AccountOrders from "@/components/account/AccountOrders";
import AccountWishlist from "@/components/account/AccountWishlist";
import AccountSettings from "@/components/account/AccountSettings";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar navigation on desktop */}
            <div className="hidden md:block bg-automod-gray rounded-lg p-4">
              <nav className="flex flex-col space-y-1">
                <button 
                  className={`flex items-center space-x-3 p-3 rounded-md text-left ${activeTab === 'profile' ? 'bg-automod-red text-white' : 'text-gray-300 hover:bg-automod-light-gray hover:text-white'}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={18} />
                  <span>Profile</span>
                </button>
                <button 
                  className={`flex items-center space-x-3 p-3 rounded-md text-left ${activeTab === 'orders' ? 'bg-automod-red text-white' : 'text-gray-300 hover:bg-automod-light-gray hover:text-white'}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <Package size={18} />
                  <span>Orders</span>
                </button>
                <button 
                  className={`flex items-center space-x-3 p-3 rounded-md text-left ${activeTab === 'wishlist' ? 'bg-automod-red text-white' : 'text-gray-300 hover:bg-automod-light-gray hover:text-white'}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <Heart size={18} />
                  <span>Wishlist</span>
                </button>
                <button 
                  className={`flex items-center space-x-3 p-3 rounded-md text-left ${activeTab === 'settings' ? 'bg-automod-red text-white' : 'text-gray-300 hover:bg-automod-light-gray hover:text-white'}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
            
            {/* Tabs for mobile */}
            <div className="md:hidden mb-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-4 bg-automod-gray">
                  <TabsTrigger value="profile" className="data-[state=active]:bg-automod-red">
                    <User size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="data-[state=active]:bg-automod-red">
                    <Package size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="wishlist" className="data-[state=active]:bg-automod-red">
                    <Heart size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="data-[state=active]:bg-automod-red">
                    <Settings size={18} />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Content area */}
            <div className="md:col-span-3">
              {activeTab === 'profile' && <AccountProfile />}
              {activeTab === 'orders' && <AccountOrders />}
              {activeTab === 'wishlist' && <AccountWishlist />}
              {activeTab === 'settings' && <AccountSettings />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
