import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import WorkerHistoryPage from "./pages/WorkerHistoryPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/worker-history" element={<WorkerHistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
