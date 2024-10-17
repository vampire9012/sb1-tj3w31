import React from 'react';
import { Link } from 'react-router-dom';

const InfluencerDashboard: React.FC = () => {
  // Mock data for demonstration
  const adRequests = [
    { id: 1, campaignName: 'Summer Collection Launch', sponsor: 'FashionCo', status: 'Pending', payment: 1000 },
    { id: 2, campaignName: 'New Smartphone Promo', sponsor: 'TechGiant', status: 'Accepted', payment: 1500 },
    { id: 3, campaignName: 'Fitness Challenge', sponsor: 'HealthyLife', status: 'Completed', payment: 800 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Influencer Dashboard</h2>
      <div className="mb-6">
        <Link to="/search" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
          Find New Campaigns
        </Link>
      </div>
      <div className="bg-white rounded-md shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sponsor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {adRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">{request.campaignName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.sponsor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">${request.payment}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/ad-requests/${request.id}`} className="text-blue-600 hover:text-blue-900">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfluencerDashboard;