import React from "react";
import { PiChatTeardropFill } from "react-icons/pi";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      {/* chat icon */}
      <div className="chatContainer">
        <PiChatTeardropFill color="white" size={28} />
      </div>
    </div>
  );
};

export default Header;
