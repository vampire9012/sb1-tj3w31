import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, BarChart2, FileText, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: `/${user?.role}` },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Campaigns', path: '/campaigns' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive(item.path) ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;