import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./contexts/contexts";
import "./App.css";
import ExpenseTracker from "./pages/ExpenseTracker";
import Home from "./pages/Home";

function App() {
  const [database, setDatabase] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const appendData = (input) => {
    setDatabase([...database, input]);
    let tempBal = balance,
      tempInc = income,
      tempExp = expense;
    if (input.type == "inc") {
      tempBal += Number(input.amount.substr(1));
      tempInc += Number(input.amount.substr(1));
    } else {
      tempBal -= Number(input.amount.substr(1));
      tempExp -= Number(input.amount.substr(1));
    }
    setBalance(tempBal);
    setIncome(tempInc);
    setExpense(tempExp);
    console.log(database);
  };

  return (
    <Context.Provider
      value={{
        contextData: {
          balance: balance,
          income: income,
          expense: expense,
          database_log: database,
          update_database: appendData
        }
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
