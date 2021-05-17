import React, { useState, useContext } from "react";
import { AppContext } from "../App";

const AddTransaction = ({inputRef, setState, setTransactions }) => {
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
    e.preventDefault();
    console.log(inputRef.current[1].value);

    if (inputs.text.trim() === "" || inputs.amount.trim() === "") {
      // alert("Please add a text and amount");
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
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label>Text</label>
          <input
            onChange={handleTextInput}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={handleAmountInput}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={handleOnSubmit} className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
