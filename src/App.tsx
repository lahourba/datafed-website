import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Training from './pages/Training';
import ClientCases from './pages/ClientCases';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/training" element={<Training />} />
            <Route path="/client-cases" element={<ClientCases />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;