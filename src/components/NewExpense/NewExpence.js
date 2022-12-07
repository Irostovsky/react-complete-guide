import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelFormHandler();
  };

  const addNewExpenseHandler = () => {
    setShowForm(true);
  };
  const cancelFormHandler = () => {
    setShowForm(false);
  };

  let content = <button onClick={addNewExpenseHandler}>Add New Expense</button>;
  if (showForm) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelFormHandler}
      />
    );
  }
  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
