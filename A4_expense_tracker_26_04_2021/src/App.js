import { useState, createContext } from "react";
import "./App.css";
import Balance from "./components/balance";
import History from "./components/history";
import AddTransaction from "./components/addTransaction";

export const AppContext = createContext();
export const transactionContext = createContext();
function App() {
  const [state, setState] = useState({
    income: 0,
    expense: 0,
  });
  const [transactions, setTransactions] = useState([]);

  return (
    <AppContext.Provider value={state}>
      <div className="App">
        <Balance />
        <transactionContext.Provider value={transactions}>
          <History setTransactions={setTransactions} />
        </transactionContext.Provider>
        <AddTransaction setState={setState} setTransactions={setTransactions} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
