import React, { useState } from 'react';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('campaigns');

  // Mock data for demonstration
  const campaigns = [
    { id: 1, name: 'Summer Collection Launch', sponsor: 'FashionCo', budget: 5000 },
    { id: 2, name: 'New Smartphone Promo', sponsor: 'TechGiant', budget: 7500 },
    { id: 3, name: 'Fitness Challenge', sponsor: 'HealthyLife', budget: 3000 },
  ];

  const influencers = [
    { id: 1, name: 'John Doe', niche: 'Fashion', followers: 100000 },
    { id: 2, name: 'Jane Smith', niche: 'Technology', followers: 250000 },
    { id: 3, name: 'Mike Johnson', niche: 'Fitness', followers: 75000 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
    console.log('Searching for', searchTerm, 'in', searchType);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Search</h2>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="flex-grow px-3 py-2 border rounded-md"
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="px-3 py-2 border rounded-md"
          >
            <option value="campaigns">Campaigns</option>
            <option value="influencers">Influencers</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>
      </form>

      {searchType === 'campaigns' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Campaigns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white p-4 rounded-md shadow">
                <h4 className="font-bold">{campaign.name}</h4>
                <p>Sponsor: {campaign.sponsor}</p>
                <p>Budget: ${campaign.budget}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchType === 'influencers' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Influencers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {influencers.map((influencer) => (
              <div key={influencer.id} className="bg-white p-4 rounded-md shadow">
                <h4 className="font-bold">{influencer.name}</h4>
                <p>Niche: {influencer.niche}</p>
                <p>Followers: {influencer.followers.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;