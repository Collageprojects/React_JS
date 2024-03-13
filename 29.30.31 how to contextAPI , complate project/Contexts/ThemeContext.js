const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, SetIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, SetIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
