import Categories from "../category";
import ExpenseComponent from "../Expense";
import "./home.css";
const HomeComponent: React.FC = () => {
  return (
    <div className="HomeCard">
      <img
        src="/Images/credit-card_gray.svg"
        alt="Credit Card"
        width="100"
        height="100"
      />
      <h1>Expense Tracker</h1>
      <div style={{ marginLeft: "20px" }}>
        <Categories />
        <ExpenseComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
