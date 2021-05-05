import { useContext } from "react";
import { AppContext } from "../App";


const Balance = ({t}) => {
  const value = useContext(AppContext);
  const balance = value.income + value.expense;
 

  return (
    <div>
       
      <h2>{t('Expense Tracker')}</h2>

      <div className="container">
        <h4>{t('YOUR BALANCE')}</h4>
        <h1 id="balance">{`${balance}$`}</h1>

        <div className="inc-exp-container">
          <div>
            <h4>{t('INCOME')}</h4>
            <p id="money-plus" className="money plus">
              {`${value.income}$`}
            </p>
          </div>
          <div>
            <h4>{t('EXPENSE')}</h4>
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
