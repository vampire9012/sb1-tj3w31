import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, DollarSign } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome to InfluConnect</h1>
        <p className="text-xl mb-8 text-gray-600">Connect sponsors with influencers and grow your brand!</p>
        <div className="space-x-4">
          <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 inline-flex items-center">
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link to="/search" className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition duration-300">
            Explore Campaigns
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50 rounded-lg shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose InfluConnect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star size={48} className="mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Top Influencers</h3>
              <p className="text-gray-600">Connect with the best influencers in your niche</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
              <p className="text-gray-600">Access a diverse pool of audiences across platforms</p>
            </div>
            <div className="text-center">
              <DollarSign size={48} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Flexible Budgets</h3>
              <p className="text-gray-600">Find campaigns that fit your budget, big or small</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Campaigns</h2>
        {/* Add featured campaigns here */}
      </section>
    </div>
  );
};

export default Home;