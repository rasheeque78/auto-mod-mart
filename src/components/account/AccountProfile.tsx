
import { useState } from "react";
import { Camera, CheckCircle } from "lucide-react";

// Mock user data (this would come from your authentication system)
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Anytown, CA 12345",
  avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
};

const AccountProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [saveStatus, setSaveStatus] = useState<null | 'saving' | 'success'>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus('saving');
    
    // Simulate API call
    setTimeout(() => {
      setSaveStatus('success');
      setIsEditing(false);
      // After a moment, clear the success status
      setTimeout(() => setSaveStatus(null), 3000);
    }, 800);
  };
  
  return (
    <div className="bg-automod-gray rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Personal Information</h2>
        {!isEditing && (
          <button 
            className="text-automod-red hover:text-red-400 transition-colors"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar section */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src={userData.avatar} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-automod-light-gray"
            />
            <button className="absolute bottom-0 right-0 bg-automod-red p-2 rounded-full text-white">
              <Camera size={18} />
            </button>
          </div>
          <h3 className="text-lg font-medium">{userData.name}</h3>
          <p className="text-gray-400 text-sm">Member since January 2023</p>
        </div>
        
        {/* Profile information */}
        <div className="flex-grow">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full bg-automod-dark border ${isEditing ? 'border-automod-light-gray' : 'border-transparent'} rounded-md px-4 py-2 text-white`}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full bg-automod-dark border ${isEditing ? 'border-automod-light-gray' : 'border-transparent'} rounded-md px-4 py-2 text-white`}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm text-gray-400">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full bg-automod-dark border ${isEditing ? 'border-automod-light-gray' : 'border-transparent'} rounded-md px-4 py-2 text-white`}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm text-gray-400">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full bg-automod-dark border ${isEditing ? 'border-automod-light-gray' : 'border-transparent'} rounded-md px-4 py-2 text-white`}
                />
              </div>
            </div>
            
            {isEditing && (
              <div className="flex justify-end mt-6 space-x-3">
                <button 
                  type="button"
                  className="px-4 py-2 border border-automod-light-gray text-white rounded hover:bg-automod-light-gray transition-colors"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData(userData);
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-automod-red text-white rounded hover:bg-red-700 transition-colors flex items-center"
                >
                  {saveStatus === 'saving' ? (
                    <span>Saving...</span>
                  ) : (
                    <span>Save Changes</span>
                  )}
                </button>
              </div>
            )}
          </form>
          
          {/* Success message */}
          {saveStatus === 'success' && (
            <div className="mt-4 bg-green-900/30 text-green-400 p-3 rounded-md flex items-center">
              <CheckCircle size={18} className="mr-2" />
              <span>Profile updated successfully!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
