import Categories from "../category";
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
      <Categories />
    </div>
  );
};

export default HomeComponent;
