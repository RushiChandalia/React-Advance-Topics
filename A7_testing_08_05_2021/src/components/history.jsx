import { useContext } from "react";
import { transactionContext } from "../App";

const History = ({ setTransactions }) => {
  const value = useContext(transactionContext);

  function removeTransaction(id) {
    var newTransactionArray = value.filter((t) => t.id !== id);
    setTransactions(newTransactionArray);
  }

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {value.map((t) => (
          <li className={t.amount < 0 ? "minus" : "plus"} key={t.id}>
            <span id="grid1">
              <button
                onClick={() => removeTransaction(t.id)}
                className="delete-btn"
              >
                x
              </button>

              {t.text}
            </span>{" "}
            <span>{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
