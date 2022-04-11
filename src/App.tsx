import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransictionModalOpen] = useState(false);
  function handleOpenNewTransactionModal() {
    setIsNewTransictionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransictionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <div className="App">
        <Header onOpenNewTransictionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        <GlobalStyle />
      </div>
    </TransactionsProvider>
  );
}

export default App;
