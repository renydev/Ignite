import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

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

        <Modal
          isOpen={isNewTransationModalOpen}
          onRequestClose={handleCloseNewTransationModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
        
        <GlobalStyle />
      </>
    </div>
  );
}
