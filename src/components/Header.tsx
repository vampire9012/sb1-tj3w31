import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bell, MessageSquare } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Users size={32} className="text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">InfluConnect</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {user ? (
            <>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Bell size={20} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <MessageSquare size={20} />
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;