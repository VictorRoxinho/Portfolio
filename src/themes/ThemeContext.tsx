import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => {
    const body = document.body;
    const newTheme = !isDarkMode ? "dark" : "light";

    localStorage.setItem("theme", newTheme);

    body.classList.toggle("dark-theme", newTheme === "dark");
    body.classList.toggle("light-theme", newTheme === "light");

    setIsDarkMode(newTheme === "dark");
  };

  useEffect(() => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme") || "light";

    body.classList.add(savedTheme === "dark" ? "dark-theme" : "light-theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className='theme-container'>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
