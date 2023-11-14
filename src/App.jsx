import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidepanel from "./components/sidepanel";
import OverviewContent from "./components/Overview/overview";
import OnboardingContent from "./components/Onboarding/onboarding";
import MonitoringContent from "./components/Monitoring/monitoring";
import FlaggingContent from "./components/Flagging/flagging";
import SourceToIncomeContent from "./components/SourceToIncome/sourcetoincome";
import UARContent from "./components/UAR/uar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidepanel />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<OverviewContent />} />
            <Route path="/overview" element={<OverviewContent />} />
            <Route path="/onboarding" element={<OnboardingContent />} />
            <Route path="/monitoring" element={<MonitoringContent />} />
            <Route path="/flagging" element={<FlaggingContent />} />
            <Route path="/sourceofincome" element={<SourceToIncomeContent />} />
            <Route path="/uar" element={<UARContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
