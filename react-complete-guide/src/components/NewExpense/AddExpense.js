import './ExpenseForm.css';

const AddExpense = (props) => {

    const loadForm = () => {
        props.onChangeExpenseForm();
    }

    return (
        <div>
            <button className="new-expense__actions" onClick={loadForm}>
                Add New Expense
            </button>
        </div>
    )
};

export default AddExpense;