import { useState, createContext, useRef } from "react";
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
  const inputRef = useRef([])
  

  return (
    <AppContext.Provider value={state}>
      <div className="App">
        <Balance inputRef ={inputRef}  />
        <transactionContext.Provider value={transactions}>
          <History setTransactions={setTransactions} />
        </transactionContext.Provider>
        <AddTransaction inputRef={inputRef} setState={setState} setTransactions={setTransactions} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
