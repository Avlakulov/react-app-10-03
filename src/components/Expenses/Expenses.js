import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const items = props.items;
    // console.log(items);
    return (
        <Card className="expenses">
            <ExpenseItem
                item={items[0]}
            />
            <ExpenseItem
                item={items[1]}
            />
            <ExpenseItem
                item={items[2]}
            />
            <ExpenseItem
                item={items[3]}
            />
        </Card>
    );
}

export default Expenses;

/* <ExpenseItem
    title={props[0].title}
    amount={props[0].amount}
    date={props[0].date}
/>
<ExpenseItem
    title={props[1].title}
    amount={props[1].amount}
    date={props[1].date}
/>
<ExpenseItem
    title={props[2].title}
    amount={props[2].amount}
    date={props[2].date}
/>
<ExpenseItem
    title={props[3].title}
    amount={props[3].amount}
    date={props[3].date}
/> */