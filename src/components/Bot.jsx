import { useContext } from "react";
import "./Bot.css";
import { useState } from "react";
import "../reset.css";
import Context from "../contexts/contexts";

const Bot = () => {
  const [tag, setTag] = useState(""),
    [amount, setAmount] = useState("");

  const { contextData } = useContext(Context);
  var update_database = contextData.update_database;
  const update = () => {
    if (amount[0] == "+" || amount[0] == "-") {
      var type = amount[0] == "+" ? "inc" : "exp";
      console.log("Data sent: ", tag, amount, type);
      update_database({ tag: tag, amount: amount, type: type });
    } else alert("Input Invalid!\nMissing Operator +/-");
  };

  return (
    <div id="bot-container">
      <div id="input-title-container">
        <p>Add new transaction</p>
      </div>
      <div id="input-container">
        <div id="input-tag">
          <p>Tag</p>
          <input
            className="custom-box-shadow"
            name="tag"
            placeholder="Input a tag..."
            type="text"
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div id="input-amount">
          <p>
            Amount <br /> (negative - expense, positive - income)
          </p>
          <input
            className="custom-box-shadow"
            name="amount"
            placeholder="Input an amount..."
            type="text"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="input-button custom-box-shadow" onClick={update}>
          Add transaction
        </button>
      </div>
    </div>
  );
};

export default Bot;
