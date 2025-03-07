
import { useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

const AccountSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newProducts: false,
    blogPosts: false,
  });
  
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");
    
    // Validate password
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setPasswordSuccess("Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      
      // Clear success message after a few seconds
      setTimeout(() => {
        setPasswordSuccess("");
      }, 3000);
    }, 800);
  };
  
  return (
    <div className="bg-automod-gray rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Account Settings</h2>
      
      <div className="space-y-8">
        {/* Password Change Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Change Password</h3>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="currentPassword" className="block text-sm text-gray-400">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                className="w-full bg-automod-dark border border-automod-light-gray rounded-md px-4 py-2 text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="newPassword" className="block text-sm text-gray-400">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full bg-automod-dark border border-automod-light-gray rounded-md px-4 py-2 text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm text-gray-400">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full bg-automod-dark border border-automod-light-gray rounded-md px-4 py-2 text-white"
                required
              />
            </div>
            
            {passwordError && (
              <div className="bg-red-900/30 text-red-400 p-3 rounded-md flex items-center">
                <AlertCircle size={18} className="mr-2" />
                <span>{passwordError}</span>
              </div>
            )}
            
            {passwordSuccess && (
              <div className="bg-green-900/30 text-green-400 p-3 rounded-md flex items-center">
                <CheckCircle size={18} className="mr-2" />
                <span>{passwordSuccess}</span>
              </div>
            )}
            
            <button
              type="submit"
              className="px-4 py-2 bg-automod-red text-white rounded hover:bg-red-700 transition-colors"
            >
              Update Password
            </button>
          </form>
        </div>
        
        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="orderUpdates"
                checked={notifications.orderUpdates}
                onChange={() => handleNotificationChange('orderUpdates')}
                className="mr-3 h-4 w-4 accent-automod-red"
              />
              <label htmlFor="orderUpdates" className="text-gray-300">
                Order status updates
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="promotions"
                checked={notifications.promotions}
                onChange={() => handleNotificationChange('promotions')}
                className="mr-3 h-4 w-4 accent-automod-red"
              />
              <label htmlFor="promotions" className="text-gray-300">
                Promotions and discounts
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newProducts"
                checked={notifications.newProducts}
                onChange={() => handleNotificationChange('newProducts')}
                className="mr-3 h-4 w-4 accent-automod-red"
              />
              <label htmlFor="newProducts" className="text-gray-300">
                New product arrivals
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="blogPosts"
                checked={notifications.blogPosts}
                onChange={() => handleNotificationChange('blogPosts')}
                className="mr-3 h-4 w-4 accent-automod-red"
              />
              <label htmlFor="blogPosts" className="text-gray-300">
                Blog posts and tutorials
              </label>
            </div>
          </div>
          
          <button
            className="mt-4 px-4 py-2 bg-automod-light-gray text-white rounded hover:bg-automod-red transition-colors"
          >
            Save Preferences
          </button>
        </div>
        
        {/* Delete Account Section */}
        <div className="border-t border-automod-light-gray pt-6">
          <h3 className="text-lg font-medium mb-4 text-red-400">Danger Zone</h3>
          <p className="text-gray-400 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            className="px-4 py-2 border border-red-500 text-red-400 rounded hover:bg-red-900/30 transition-colors"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
