import { useState } from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.body.classList.toggle("dark");
    };

    return {
        isDark,
        toggleDarkMode
    }
};