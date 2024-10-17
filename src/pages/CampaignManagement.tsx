import React, { useState } from 'react';

const CampaignManagement: React.FC = () => {
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [visibility, setVisibility] = useState('public');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement campaign creation logic
    console.log('Campaign created', { campaignName, description, startDate, endDate, budget, visibility });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="campaignName" className="block mb-1">Campaign Name</label>
          <input
            type="text"
            id="campaignName"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block mb-1">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block mb-1">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="budget" className="block mb-1">Budget</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="visibility" className="block mb-1">Visibility</label>
          <select
            id="visibility"
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CampaignManagement;