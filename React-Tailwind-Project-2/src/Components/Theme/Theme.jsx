import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="">
      {/* <button>Change</button> */}
      <FaMoon
        onClick={toggleTheme}
        className="text-2xl hidden sm:block dark:text-white cursor-pointer"
      />
    </div>
  );
}

export default Theme;
