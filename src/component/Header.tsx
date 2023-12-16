import React from "react";
import "../style/app.css";
function Header() {
  return (
    <div>
      <ul className="header container">
        <li className="liheader">Home</li>
        <li className="liheader">Link</li>
        <li className="liheader">
          <select className="optionHeader">
            <option value="">Test</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Header;
