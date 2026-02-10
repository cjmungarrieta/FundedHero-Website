import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnnouncementBanner from './components/AnnouncementBanner';
import CursorGlow from './components/CursorGlow';
import Starfield from './components/Starfield';
import NotificationSystem from './components/NotificationSystem';
import HomePage from './pages/HomePage';
import AffiliatesPage from './pages/AffiliatesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black relative" style={{ zIndex: 3 }}>
        <Starfield />
        <CursorGlow />
        <NotificationSystem />
        <AnnouncementBanner />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
