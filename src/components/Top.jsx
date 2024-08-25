/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "./Top.css";
import { useState } from "react";
import "../reset.css";
import Context from "../contexts/contexts";

const Top = () => {
  const { contextData } = useContext(Context);
  var balance = contextData.balance,
    income = contextData.income,
    expense = contextData.expense;

  var sign = "";
  balance = balance.toFixed(2).toString();
  if (balance[0] == "-") {
    sign = "-";
    balance = balance.slice(1);
  }

  return (
    <div id="top-container">
      <p id="title">Expense Tracker</p>
      <div id="balance-container">
        <p>YOUR BALANCE</p>
        <span>
          {sign}${balance}
        </span>
      </div>
      <div id="income-expense-container" className="custom-box-shadow">
        <div id="income-expense">
          <div className="left">
            <span className="income-title">INCOME</span>
            <span className="income-amount amount">+${income.toFixed(2)}</span>
          </div>
          <div className="right">
            <span className="expense-title">EXPENSE</span>
            <span className="expense-amount amount">-${(expense * -1).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
