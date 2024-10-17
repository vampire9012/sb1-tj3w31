import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import SponsorDashboard from './pages/SponsorDashboard';
import InfluencerDashboard from './pages/InfluencerDashboard';
import CampaignManagement from './pages/CampaignManagement';
import AdRequestManagement from './pages/AdRequestManagement';
import Search from './pages/Search';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/sponsor" element={<SponsorDashboard />} />
                <Route path="/influencer" element={<InfluencerDashboard />} />
                <Route path="/campaigns" element={<CampaignManagement />} />
                <Route path="/ad-requests" element={<AdRequestManagement />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;