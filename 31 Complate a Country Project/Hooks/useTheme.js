import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export function useTheme() {
    const [isDark , SetIsDark] = useContext(ThemeContext)

    return [isDark , SetIsDark] 
}