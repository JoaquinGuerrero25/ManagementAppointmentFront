import { useState, useEffect } from "react";

export const useThemeMode = () => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(savedMode);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleMode = () => setDarkMode((prevMode) => !prevMode);

    return {
        darkMode,
        toggleMode,
    };
};