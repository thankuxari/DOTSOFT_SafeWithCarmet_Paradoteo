import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import WorkerHistoryPage from "./pages/WorkerHistoryPage.jsx";
import JobAnalytics from "./pages/JobAnalytics.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/worker-history" element={<WorkerHistoryPage />} />
        <Route path="/job-analytics" element={<JobAnalytics />} />
      </Routes>
    </>
  );
}

export default App;
