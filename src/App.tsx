import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import LemonDrop from './pages/LemonDrop';
import Lavender from './pages/Lavender';
import LaxlyCucumber from './pages/LaxlyCucumber';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/lemon-drop" replace />} />
        <Route path="/lemon-drop" element={<LemonDrop />} />
        <Route path="/lavender" element={<Lavender />} />
        <Route path="/laxly-cucumber" element={<LaxlyCucumber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;