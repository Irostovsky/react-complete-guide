import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const rows = props.items.map((item) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  ));

  return <Card className="expenses">{rows}</Card>;
}

export default Expenses;
