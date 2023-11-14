import React, { useState, useEffect, useMemo } from "react";
import Table from "../Table/table";
import {
  monitoringTabs,
  Pending,
  Completed,
  triggerPendingOptions,
  triggerCompletedOptions,
  riskCompletedOptions,
  riskPendingOptions,
} from "./monitoringTabs";
import monitoringData from "./monitoringData.json";
import "./monitoring.css";
import NoDataAvailable from "../noDataAvailable/noDataAvailable";
import Dropdown from "../Dropdown/dropdown";

const MonitoringContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const data = useMemo(() => monitoringData, []);
  const columnsPending = useMemo(() => Pending, []);
  const columnsCompleted = useMemo(() => Completed, []);

  console.log(data.length);

  return (
    <div>
      <h1>Monitoring</h1>
      <div className="section">
        {monitoringTabs.map((monitoringTab) => (
          <div
            key={monitoringTab.id}
            className="overview"
            onClick={() => handleTabClick(monitoringTab.id)}
          >
            <div
              className={`text-wrapper ${
                activeTab === monitoringTab.id ? "active" : ""
              }`}
            >
              {monitoringTab.title}
            </div>
            <div
              className={`highlight ${
                activeTab === monitoringTab.id ? "active" : ""
              }`}
            />
          </div>
        ))}
        <div className="close-button"></div>
      </div>
      <div className="background-line" />
      <div className="monitoring-data">
        {data.length ? (
          activeTab === 0 ? (
            <>
              <div className="actions">
                <Dropdown
                  optionsValue={triggerPendingOptions}
                  label="Trigger Reason"
                />
                <Dropdown
                  optionsValue={riskPendingOptions}
                  label="Risk Level"
                />
              </div>
              <Table columns={columnsPending} data={data} />
            </>
          ) : (
            <>
              <div className="actions">
                <Dropdown
                  optionsValue={triggerCompletedOptions}
                  label="Trigger Reason"
                />
                <Dropdown
                  optionsValue={riskCompletedOptions}
                  label="Risk Level"
                />
              </div>
              <Table columns={columnsCompleted} data={data} />
            </>
          )
        ) : (
          <NoDataAvailable />
        )}
      </div>
    </div>
  );
};

export default MonitoringContent;
