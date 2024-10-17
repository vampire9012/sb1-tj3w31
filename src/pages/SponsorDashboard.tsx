import React from 'react';
import { Link } from 'react-router-dom';

const SponsorDashboard: React.FC = () => {
  // Mock data for demonstration
  const campaigns = [
    { id: 1, name: 'Summer Collection Launch', status: 'Active', budget: 5000 },
    { id: 2, name: 'New Product Teaser', status: 'Draft', budget: 3000 },
    { id: 3, name: 'Holiday Special', status: 'Completed', budget: 7500 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Sponsor Dashboard</h2>
      <div className="mb-6">
        <Link to="/campaigns" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Create New Campaign
        </Link>
      </div>
      <div className="bg-white rounded-md shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap">{campaign.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{campaign.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">${campaign.budget}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/campaigns/${campaign.id}`} className="text-blue-600 hover:text-blue-900">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SponsorDashboard;