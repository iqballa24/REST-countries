import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className="bg-white drop-shadow-md px-3 sm:px-8 lg:px-20 py-6 dark:bg-dark-blue dark:border-0"
      role="navigation"
    >
      <div className="flex flex-row justify-between items-center">
        <span className="text-base sm:text-lg lg:text-xl font-bold">
          Where in the world?
        </span>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          <MdOutlineDarkMode />
          <p className="text-sm font-semibold pl-1">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
