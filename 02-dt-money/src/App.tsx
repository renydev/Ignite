import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";


export function App() {


  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal() {
    setIsNewTransationModalOpen(true)
  }
  function handleCloseNewTransationModal() {
    setIsNewTransationModalOpen(false)
  }

  return (
    <div className="App">
      <TransactionsContext.Provider value={[]}>
        <Header onOpenNewTransactionModal={handleOpenNewTransationModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransationModalOpen}
          onRequestClose={handleCloseNewTransationModal}
        />        
        <GlobalStyle />
      </TransactionsContext.Provider>
    </div>
  );
}
