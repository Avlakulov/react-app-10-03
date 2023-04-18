import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');

  // Interactivity
  function clickHandler(e){
    e.preventDefault();

  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01'/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2023-05-31'/>
        </div>
      </div>
      <button className='new-expense__actions' onClick={clickHandler}>Add New Expense</button>
    </form>
  );
};
export default ExpenseForm;