"use client"
import React, {useState,useEffect} from 'react'
import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { Sun, Moon } from "lucide-react"; // Icon library
function header() {

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <ActionIcon
      variant="outline"
      size="lg"
      onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
    >
      {colorScheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </ActionIcon>
  );
}

export default header

