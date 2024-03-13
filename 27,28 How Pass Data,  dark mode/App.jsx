import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import "./App.css";


const App = () => {
  const [isDark , SetIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
      <Header theme={[isDark , SetIsDark]}/>
      <Outlet context={[isDark , SetIsDark]}/>
    </>
  );
};

export default App;
