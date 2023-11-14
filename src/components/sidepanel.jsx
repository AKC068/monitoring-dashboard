import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidepanelTabs } from "./sidepanelTabs";
import "./sidepanel.css";
import logo from "../img/image1.png";

const Sidepanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="sidepanel">
      <div className="frame">
        <img className="image" alt="logo" src={logo} />
        <div className="div">
          {sidepanelTabs.map((sidepanelTab) => (
            <Link
              key={sidepanelTab.id}
              to={`/${sidepanelTab.title
                .trim()
                .replace(/\s/g, "")
                .toLowerCase()}`}
              className={`div-wrapper ${
                activeTab === sidepanelTab.id ? "home" : ""
              }`}
              onClick={() => handleTabClick(sidepanelTab.id)}
            >
              <div
                className={`text-wrapper ${
                  activeTab === sidepanelTab.id ? "active-tab" : ""
                }`}
              >
                {sidepanelTab.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="avatar-text">
          <div className="avatar" />
          <div className="text">
            <div className="text-wrapper-4">Elon Musk</div>
            <div className="text-wrapper-5">elon@twitter.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
