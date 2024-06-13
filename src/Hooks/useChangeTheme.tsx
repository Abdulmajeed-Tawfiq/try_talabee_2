import React, { useEffect, useState } from "react";
import { ThemeModeEnum } from "../enums/ThemeMode";

export const useChangeTheme = () => {
    const { DARK_MODE, LIGHT_MODE } = ThemeModeEnum;
    const [currentTheme, setCurrentTheme] = useState<ThemeModeEnum | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            setCurrentTheme(storedTheme as ThemeModeEnum);
        } else {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setCurrentTheme(darkModeMediaQuery.matches ? DARK_MODE : LIGHT_MODE);
        }
    }, []);

    useEffect(() => {
        if (currentTheme) {
            document.body.classList.toggle(DARK_MODE, currentTheme === DARK_MODE);
            localStorage.setItem('theme', currentTheme);
        }
    }, [currentTheme]);

    const changeTheme = (newTheme: ThemeModeEnum) => {
        setCurrentTheme(newTheme);
    };

    return { currentTheme, changeTheme };
};
