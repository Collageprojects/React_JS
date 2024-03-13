import React, { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, SetErrors] = useState({});

  const Validate = (formData) => {
    const errorData = {};

    if (!formData.title) {
      errorData.title = "Title is required";
    }
    if (!formData.category) {
      errorData.category = "Category is required";
    }
    if (!formData.amount) {
      errorData.amount = "Amount is required";
    }
    SetErrors(errorData);
    return errorData;
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const validateResult = Validate(expense);
    if (Object.keys(validateResult).length) {
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    SetErrors({});
  };

  return (
    <form className="expense-form" onSubmit={HandleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={HandleChange}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={HandleChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={HandleChange}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
