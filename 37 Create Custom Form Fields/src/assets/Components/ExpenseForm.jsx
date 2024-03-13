import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses }) {
  
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    
  });
  const [errors, SetErrors] = useState({});

  const ValidationConfig = {
    title: [{ required: true, message: "please Enter Title" }],
    category: [{ required: true, message: "please Enter Title" }],
    amount: [{ required: true, message: "please Enter Title" } ],
    // email: [
    //   { required: true, message: "please Enter E-mail" },
    //   {
    //     pattens: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     message: "Please enter a valid email",
    //   },
    // ],
  };

  const Validate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      ValidationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true
        }
        // if(rule.pattens && !rule.pattens.test(value)) {
        //   errorData[key] = rule.message;
        //   return true
        // }
      });
    });

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
    }));
    SetErrors({});
  };

  return (
    <form className="expense-form" onSubmit={HandleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={HandleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={HandleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        SelectOption={"Select Category"}
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={HandleChange}
        error={errors.amount}
      />
      
      <button className="add-btn">Add</button>
    </form>
  );
}
