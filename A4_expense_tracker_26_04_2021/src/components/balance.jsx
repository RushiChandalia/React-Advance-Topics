import { useContext } from "react";
import { AppContext } from "../App";

const Balance = ({inputRef}) => {
  const value = useContext(AppContext);
  const balance = value.income + value.expense;
  const handler = idx => e => {
    const next = inputRef.current[idx];
    if (next) {
      next.focus()
    }
  };
  return (
    <div>
      <div>
       { [1,2,3].map((i,idx)=>{
         return <input key={idx} ref={el => inputRef.current[i-1] = el}  onChange={handler(i)} type="number"></input>
       })}
       
      </div>
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
