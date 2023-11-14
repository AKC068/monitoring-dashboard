import React from "react";
import "./dropdown.css";

const Dropdown = ({ optionsValue, label }) => {
  return (
    <div className="dropdown">
      <label htmlFor="filterDropdown">{label}</label>
      <select id="filterDropdown" className="dropdown-toggle">
        {optionsValue.map((optionValue) => (
          //   <div className="div-wrapper">
          <option
            key={optionValue.id}
            value={optionValue.title}
            className="text-wrapper"
          >
            {optionValue.title}
          </option>
          //   </div>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
