import { createContext } from "react";
import type { ThemeContextProps } from "../utils/types";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});
