import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setType } from "../slice";

const Tabs: React.FC = () => {
  // variable and function declaration
  const dispatch = useDispatch();
  const type = useSelector((state: RootState) => state.expense.type);

  const [activeTab, setActiveTab] = React.useState(
    type ? type : "Daily Expenses"
  );

  const handleTab = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.innerText);
    setActiveTab(e.currentTarget.innerText);
    dispatch(setType(e.currentTarget.innerText));
  };
  return (
    <div className="tabs">
      <div
        style={{ display: "flex", marginTop: "-10px" }}
        className={
          "tabButton" + (activeTab === "Daily Expenses" ? "Active" : "")
        }
        onClick={handleTab}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
        </svg>
        <div style={{ marginTop: "2px", marginLeft: "2px", fontSize: "15px" }}>
          Daily Expenses
        </div>
      </div>
      |
      <div
        style={{ display: "flex", marginTop: "-10px" }}
        className={
          "tabButton" + (activeTab === "Monthly Expenses" ? "Active" : "")
        }
        onClick={handleTab}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
        </svg>

        <div style={{ marginTop: "2px", marginLeft: "2px", fontSize: "15px" }}>
          Monthly Expenses
        </div>
      </div>
      |
      <div
        style={{ display: "flex", marginTop: "-10px" }}
        className={"tabButton" + (activeTab === "Calender" ? "Active" : "")}
        onClick={handleTab}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
        </svg>
        <div style={{ marginTop: "2px", marginLeft: "2px", fontSize: "15px" }}>
          Calender
        </div>
      </div>
      |
      <div
        style={{ display: "flex", marginTop: "-10px" }}
        className={"tabButton" + (activeTab === "Yearly" ? "Active" : "")}
        onClick={handleTab}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
        </svg>
        <div style={{ marginTop: "2px", marginLeft: "2px", fontSize: "15px" }}>
          Yearly
        </div>
      </div>
    </div>
  );
};

export default Tabs;
