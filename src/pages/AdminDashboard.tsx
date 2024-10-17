import React from 'react';

const AdminDashboard: React.FC = () => {
  // Mock data for demonstration
  const stats = {
    activeUsers: 1250,
    totalCampaigns: 85,
    pendingApprovals: 12,
    flaggedAccounts: 3,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-2">Active Users</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.activeUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-2">Total Campaigns</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalCampaigns}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-2">Pending Approvals</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingApprovals}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-2">Flagged Accounts</h3>
          <p className="text-3xl font-bold text-red-600">{stats.flaggedAccounts}</p>
        </div>
      </div>
      {/* TODO: Add more admin functionalities like user management, campaign monitoring, etc. */}
    </div>
  );
};

export default AdminDashboard;