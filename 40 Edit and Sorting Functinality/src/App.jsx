import "./App.css";
import ExpenseForm from "./assets/Components/ExpenseForm";
import ExpenseTable from "./assets/Components/ExpenseTable";

import { useState } from "react";
import ExpenseData from "./ExpenseData";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useState(ExpenseData);
  const [editingRowId, SetEditingRowId] = useState("");

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            expense={expense}
            editingRowId={editingRowId}
            setExpense={setExpense}
            SetEditingRowId={SetEditingRowId}
          />
          <ExpenseTable
            expenses={expenses}
            SetEditingRowId={SetEditingRowId}
            setExpense={setExpense}
            setExpenses={setExpenses}
          />
        </div>
      </main>
    </>
  );
}

export default App;
