import { useContext } from "react";
import { AppContext } from "../App";

const Balance = () => {
  const value = useContext(AppContext);
  const balance = value.income + value.expense;

  return (
    <div>
      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">{`${balance}$`}</h1>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              {`${value.income}$`}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
              {`${value.expense}$`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
