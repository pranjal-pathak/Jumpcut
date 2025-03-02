import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Accordion from './components/Accordion';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </>
  );
}

export default App; 
