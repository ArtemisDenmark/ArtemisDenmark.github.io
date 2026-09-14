import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-3 rounded-full bg-cyber-card border border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-white transition-all shadow-lg z-50 group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          className="group-hover:rotate-90 transition-transform duration-300"
        />
      ) : (
        <Moon
          size={20}
          className="group-hover:-rotate-12 transition-transform duration-300"
        />
      )}
    </button>
  );
}
