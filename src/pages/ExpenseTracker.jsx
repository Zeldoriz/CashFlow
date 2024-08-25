import "./ExpenseTracker.css";
import Top from "../components/Top";
import Mid from "../components/Mid";
import Bot from "../components/Bot";
import Sidebar from "../components/Sidebar";

const ExpenseTracker = () => {
  return (
    <>
      <Sidebar />
      <div id="expense-tracker-container">
        <div>
          <Top />
          <Mid />
          <Bot />
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;
