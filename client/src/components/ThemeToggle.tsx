import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to system preference
      setTheme("system");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark/light mode"
    >
      <Sun className="h-4 w-4 text-yellow-600 dark:hidden" />
      <Moon className="h-4 w-4 text-blue-400 hidden dark:block" />
    </button>
  );
};

export default ThemeToggle;
