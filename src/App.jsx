import { useState } from "react";
import "./App.css";
import "./Components/Top.css";
import Top from "./Components/Top";
import Mid from "./Components/Mid";
import Bot from "./Components/Bot";

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
    <div id="app-container">
      <div>
        <Top balance={balance} income={income} expense={expense} />
        <Mid database_log={database} />
        <Bot update_database={appendData} />
      </div>
    </div>
  );
}

export default App;
