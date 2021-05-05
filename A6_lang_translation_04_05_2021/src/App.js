import { useState, createContext,useEffect } from "react";
import "./App.css";
import Balance from "./components/balance";
import History from "./components/history";
import AddTransaction from "./components/addTransaction";
import { useI18n } from './i18n';


export const AppContext = createContext();
export const transactionContext = createContext();
function App() {
  const [state, setState] = useState({
    income: 0,
    expense: 0,
  });
  const [transactions, setTransactions] = useState([]);
  const { t, setLanguage } = useI18n();
  useEffect(() => {
      setLanguage('en')
  }, []);
  const handleSetLanguage = (e) => {
      const lang = e.target.value;
      setLanguage(lang)
  }
  return (
    <AppContext.Provider value={state}>
      <div className="App">
      <select onChange={handleSetLanguage}>
            <option value="en">English</option>
            <option value="fr">French</option>
           
        </select>
        <Balance t={t} />
        <transactionContext.Provider value={transactions}>
          <History t={t} setTransactions={setTransactions} />
        </transactionContext.Provider>
        <AddTransaction t={t} setState={setState} setTransactions={setTransactions} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
