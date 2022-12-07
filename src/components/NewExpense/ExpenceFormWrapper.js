import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseFormWrapper = (props) => {
  const [showForm, setShowForm] = useState(false);
  const addNewExpenseHandler = () => {
    setShowForm(true);
  };

  const cancelFormHandler = () => {
    setShowForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onSaveExpenseData(enteredExpenseData);
    cancelFormHandler();
  };

  if (showForm) {
    return (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelFormHandler}
      />
    );
  }

  return <button onClick={addNewExpenseHandler}>Add New Expense</button>;
};

export default ExpenseFormWrapper;
