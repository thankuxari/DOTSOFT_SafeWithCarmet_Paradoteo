import { useState } from 'react'
import { Routes, Route } from "react-router"
import Header from './components/Header.jsx'
import Dashboard from './pages/Dashboard.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App
