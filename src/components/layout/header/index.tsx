import React, { ReactNode, useState } from "react";
import "./frame.css";
import DotModal from "./dot-modal";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [dotModalTrue, setdotModalTrue] = useState<boolean>(false);
  const handleDot = () => {
    setdotModalTrue(!dotModalTrue);
  };
  return (
    <div className="frame-card">
      <div className="header">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </div>{" "}
        {/* ✅ Add size prop */}
        <div className="Heading1">Expense Manager</div>
        <div onClick={handleDot}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
          </svg>
        </div>
      </div>
      {/* {dotModalTrue && <DotModal />} */}
      {dotModalTrue && (
        <div className="dot-modal-container">
          <DotModal />
        </div>
      )}

      <div>{children}</div>
    </div>
  );
};

export default Header;
