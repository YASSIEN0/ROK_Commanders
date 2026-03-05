import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CommanderDetail } from './pages/CommanderDetail';
import { Simulator } from './pages/Simulator';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commander/:id" element={<CommanderDetail />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </Layout>
    </Router>
  );
}
