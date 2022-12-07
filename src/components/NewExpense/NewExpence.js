import "./NewExpense.css";
import ExpenseFormWrapper from "./ExpenceFormWrapper";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseFormWrapper onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
