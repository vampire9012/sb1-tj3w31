import React, { useState } from 'react';

const AdRequestManagement: React.FC = () => {
  const [campaignId, setCampaignId] = useState('');
  const [influencerId, setInfluencerId] = useState('');
  const [requirements, setRequirements] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement ad request creation logic
    console.log('Ad request created', { campaignId, influencerId, requirements, paymentAmount });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Create Ad Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="campaignId" className="block mb-1">Campaign ID</label>
          <input
            type="text"
            id="campaignId"
            value={campaignId}
            onChange={(e) => setCampaignId(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="influencerId" className="block mb-1">Influencer ID</label>
          <input
            type="text"
            id="influencerId"
            value={influencerId}
            onChange={(e) => setInfluencerId(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="requirements" className="block mb-1">Requirements</label>
          <textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
          ></textarea>
        </div>
        <div>
          <label htmlFor="paymentAmount" className="block mb-1">Payment Amount</label>
          <input
            type="number"
            id="paymentAmount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
          Create Ad Request
        </button>
      </form>
    </div>
  );
};

export default AdRequestManagement;