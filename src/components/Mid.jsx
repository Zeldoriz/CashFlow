/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "./Mid.css";
import { useState } from "react";
import "../reset.css";
import Context from "../contexts/contexts";

const Mid = () => {
  const { contextData } = useContext(Context);
  var database_log = contextData.database_log;

  const log = database_log.map((transaction, index) => {
    const className = transaction.type == "inc" ? "income" : "expense";

    return (
      <li key={index} className={className}>
        <p>{transaction.tag}</p>
        <p>
          {transaction.amount[0]}${transaction.amount.slice(1)}
        </p>
      </li>
    );
  });

  return (
    <div id="mid-container">
      <div id="history-container">
        <p>History</p>
      </div>
      <div>
        <ul id="history-table">{log}</ul>
      </div>
    </div>
  );
};

export default Mid;
