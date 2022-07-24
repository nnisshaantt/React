import './Expenses.css';
import {useState} from 'react';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear,setFilteredYear] = useState('2021')

    const filterChangeHandler = (yearValue) => {
        setFilteredYear(yearValue);
    };


    let filteredExpenses = props.data.filter(item => String(item.date.getFullYear()) === filteredYear);
    


    return (
        <Card className="expenses">
            <ExpensesFilter newFilteredYear={filteredYear} getYearValue={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />            
        </Card>
    )
}

export default Expenses;