import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";


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
      <>
        <Header onOpenNewTransactionModal={handleOpenNewTransationModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransationModalOpen}
          onRequestClose={handleCloseNewTransationModal}
        />        
        <GlobalStyle />
      </>
    </div>
  );
}
