import './App.css'
import TransactionsTable from './components/TransactionsTable'
import Navbar from "./components/Navbar"

const transactions = [
  {
    id: 1,
    debit: 'Food',
    credit: 'Amex BCP',
    amount: 12.0,
    date: '2026-07-25',
    description: 'Lunch and coffee at Starbucks',
  },
  {
    id: 2,
    debit: 'Gas',
    credit: 'Checking Account',
    amount: 41.37,
    date: '2026-07-24',
    description: 'Fuel refill at QuikTrip',
  },
  {
    id: 3,
    debit: 'Groceries',
    credit: 'Amex BCP',
    amount: 86.52,
    date: '2026-07-23',
    description: 'Weekly groceries from Walmart',
  },
  {
    id: 4,
    debit: 'Rent',
    credit: 'Checking Account',
    amount: 950.0,
    date: '2026-07-01',
    description: 'July rent payment',
  },
  {
    id: 5,
    debit: 'Entertainment',
    credit: 'Chase Freedom',
    amount: 28.99,
    date: '2026-07-20',
    description: 'Movie tickets and snacks',
  },
  {
    id: 6,
    debit: 'Utilities',
    credit: 'Checking Account',
    amount: 134.76,
    date: '2026-07-18',
    description: 'Electricity and water bill',
  },
  {
    id: 7,
    debit: 'Income',
    credit: 'Salary',
    amount: 2400.0,
    date: '2026-07-15',
    description: 'Biweekly paycheck deposit',
  },
];




function App() {
  return (
    <main>
    <Navbar/>
  <TransactionsTable transactions={transactions} />
  </main>
  
  )
};

export default App
