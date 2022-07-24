import './App.css';
import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 100,
    date: new Date(2020,2,25)

  },
  {
    id: 'e2',
    title: "Bike Insurance",
    amount: 44,
    date: new Date(2019,2,25)

  },
  {
    id: 'e3',
    title: "Health Insurance",
    amount: 154,
    date: new Date(2022,2,25)

  }
];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const getExpenseData = expense => {
        setExpenses(prevExpenses => {
          console.log(...prevExpenses);
          return [expense,...prevExpenses];
        });
  };

  return (
      <div>
        <NewExpense onPassExpenseData={getExpenseData} />
        <Expenses data={expenses} />
      </div>
  );
}

export default App;
