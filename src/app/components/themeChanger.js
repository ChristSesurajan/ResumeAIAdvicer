"use client";
import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Save theme preference
  }, [theme]);

  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="min-h-screen flex  bg-white dark:bg-black text-black dark:text-white">
      <button
        className="px-4 py-2 rounded bg-white text-black dark:bg-black dark:text-white"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeChanger;