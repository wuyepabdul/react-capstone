import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './pages/CountriesList';
import Country from './pages/Country';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<CountriesList />} />
      <Route path="/country" element={<Country />} />
    </Routes>
  </BrowserRouter>
);

export default App;
