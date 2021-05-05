import React, { useState, useContext } from "react";
import { AppContext } from "../App";

const AddTransaction = ({ setState, setTransactions, t }) => {
  const value = useContext(AppContext);
  const [inputs, setInputs] = useState({
    text: "",
    amount: 0,
  });

  const handleTextInput = (e) => {
    setInputs({
      ...inputs,
      text: e.target.value,
    });
  };
  const handleAmountInput = (e) => {
    setInputs({
      ...inputs,
      amount: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    if (inputs.text.trim() === "" || inputs.amount.trim() === "") {
      alert("Please add a text and amount");
    } else {
      var data = {
        id: generateID(),
        text: inputs.text,
        amount: +inputs.amount,
      };

      data.amount < 0
        ? setState({
            ...value,
            expense: value.expense + parseInt(inputs.amount),
          })
        : setState({
            ...value,
            income: +value.income + parseInt(inputs.amount),
          });
      setTransactions((transArray) => [...transArray, data]);

      e.preventDefault();
    }
  };

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  return (
    <div>
      <h3>{t('Add new transaction')}</h3>
      <form id="form">
        <div className="form-control">
          <label>{t('Text')}</label>
          <input
            onChange={handleTextInput}
            type="text"
            id="text"
            placeholder={t('Enter Text')}
          />
        </div>
        <div className="form-control">
          <label>
            {t('Amount')} <br />
            ({t('negative - expense, positive - income')})
          </label>
          <input
            onChange={handleAmountInput}
            type="number"
            id="amount"
            placeholder={t('Enter amount')}
          />
        </div>
        <button onClick={handleOnSubmit} className="btn">
          {t('Add Transaction')}
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
