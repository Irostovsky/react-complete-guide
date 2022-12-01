import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const rows = props.items.map((item) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  ));

  return <div className="expenses">{rows}</div>;
}

export default Expenses;
