import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddExpense from './AddExpense';
import {useState} from 'react';

const NewExpense = (props) => {

    const [currRenderValue,updateVariable] = useState(0);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onPassExpenseData(expenseData);
    };
    
    const onChangeExpenseForm = () => {
        if(currRenderValue === 0)
        {
            updateVariable(1);
        }

        else if(currRenderValue === 1)
        {
            updateVariable(0);
        }
    };

    if (currRenderValue === 0) {
      return (
        <div className="new-expense">
          <AddExpense onChangeExpenseForm={onChangeExpenseForm} />
        </div>
      );
    }

    if (currRenderValue === 1) {
      return (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onChangeExpenseForm={onChangeExpenseForm}
          />
        </div>
      );
    }       
};


export default NewExpense;