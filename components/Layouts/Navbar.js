import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ButtonSwitch from "../Button/ButtonSwitch";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  useEffect(() => {
    theme === "dark" ? setIsChecked(true) : setIsChecked(false);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClickSwitchHandler = () => {
    setTheme(theme == "dark" ? "light" : "dark");
    setIsChecked((prev) => !prev);
  };

  return (
    <nav
      className="bg-white drop-shadow-md px-3 sm:px-8 lg:px-20 py-6 dark:bg-dark-blue dark:border-0"
      role="navigation"
    >
      <div className="flex flex-row justify-between items-center">
        <span className="text-base sm:text-lg lg:text-xl font-bold">
          Where in the world?
        </span>
        <ButtonSwitch onClick={onClickSwitchHandler} checked={isChecked} />
      </div>
    </nav>
  );
};

export default Navbar;
