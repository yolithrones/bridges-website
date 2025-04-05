import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/about/AboutUs';
import ContactForm from './components/contact/ContactForm';
import FeedbackForm from './components/feedback/FeedbackForm';
import Gallery from './components/gallery/Gallery';
import FAQ from './components/pages/FAQ';
import SiteMap from './components/pages/SiteMap';
import TravelAds from './components/travel/TravelAds';
import VisitorCounter from './components/common/VisitorCounter';
import Ticker from './components/common/Ticker';
import BridgeList from './components/bridges/BridgeList';
import BridgeDetail from './components/bridges/BridgeDetail';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Account for fixed navbar
  padding-bottom: 60px; // Account for fixed ticker
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
          <VisitorCounter />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sitemap" element={<SiteMap />} />
              <Route path="/travel" element={<TravelAds />} />
              <Route path="/bridges" element={<BridgeList />} />
              <Route path="/bridges/:id" element={<BridgeDetail />} />
              <Route path="/bridges/category/:category" element={<BridgeList />} />
              <Route path="/bridges/type/:type" element={<BridgeList />} />
            </Routes>
          </MainContent>
          <Ticker />
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
