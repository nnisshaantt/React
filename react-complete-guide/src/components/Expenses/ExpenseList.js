import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';


const ExpenseList = props => {
    if (props.items.length === 0)
    {
        return <p className="expenses-list__fallback">No Expense Found.</p>
    }

    if(props.items.length > 0 )
    {
        return  props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
            ))
    }
};

export default ExpenseList;