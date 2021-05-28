import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useI18n } from "../../i18n";
const TransactionList: React.FC = () => {
  const { t } = useI18n();
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>{t("history")}</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}${transaction.amount}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
