import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { I18nContextProvider } from "./i18n/provider";
import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import Income from "./components/Income/Income";
import TransactionList from "./components/Transactions/TransactionList";
import AddTransaction from "./components/AddNewTransaction/AddTransaction";
import LanguageSelector from "./components/Language/languageSelector";
import { languages } from "./locales/index";

const App: React.FC = () => {
  return (
    <I18nContextProvider languages={languages}>
      <GlobalProvider>
        <LanguageSelector />
        <Header />
        <div className="container">
          <Balance />
          <Income />
          <TransactionList />
          <AddTransaction />
        </div>
        <Toast />
      </GlobalProvider>
    </I18nContextProvider>
  );
};

export default App;
