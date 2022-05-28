import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleDarkMode((current) => !current)}
        className="save"
      >
        Theme Mode
      </button>
    </div>
  );
};

export default Header;
