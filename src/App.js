// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 60.24,
      date: new Date(2023, 1, 16),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 11, 29),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.56,
      date: new Date(2023, 0, 31),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 456,
      date: new Date(2023, 2, 20),
    }
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
