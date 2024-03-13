
import "./App.css";
import ExpenseForm from "./assets/Components/ExpenseForm";
import ExpenseTable from "./assets/Components/ExpenseTable";

import { useState } from "react";
import ExpenseData from "./ExpenseData";

function App() {
  const [expenses , setExpenses] = useState(ExpenseData)

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses}/>
          <ExpenseTable  expenses={expenses} setExpenses={setExpenses}/>
        </div>
      </main>
    </>
  );
}

export default App;
