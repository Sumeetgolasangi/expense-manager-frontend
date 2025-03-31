import React from "react";
import "./expense.css";
import Tabs from "./tabs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const ExpenseComponent: React.FC = () => {
  // variable and function declaration
  const type = useSelector((state: RootState) => state.expense.type);
  let components = null;
  switch (type) {
    case "Daily Expenses":
      components = "Daily Expenses";
      break;
    case "Monthly Expenses":
      components = "Monthly Expenses";
      break;
    case "Calender":
      components = "Calender";
      break;
    case "Yearly":
      components = "Yearly";
      break;

    default:
      components = "Daily Expenses";
      break;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h4>Expenses</h4>
      <Tabs />
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.055)",
        }}
      ></div>

      <div>{components}</div>
    </div>
  );
};

export default ExpenseComponent;
