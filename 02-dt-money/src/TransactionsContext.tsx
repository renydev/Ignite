import { createContext, ReactChild, useEffect, useState } from 'react';
import { api } from './services/api';



interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
interface TransactionsProviderProps {
  children: ReactChild[]
}
// interface TransactionInput {
//   title: string;
//   value: number;
//   category: string;
//   type: string;
// }

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);
export function TransactionsProvider({children}: TransactionsProviderProps) {
  
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}