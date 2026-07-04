/**
 * ==========================================================
 * Author       : Lakshit Tyagi
 * Organization : Xebia
 * Project      : Xebia Learning Management System (LMS)
 * File         : src/contexts/ThemeContext.jsx
 *
 * Purpose:
 * Provides global theme management for the entire
 * application using React Context.
 *
 * Responsibilities:
 * - Store the current application theme.
 * - Persist theme preference using localStorage.
 * - Apply theme settings to the root HTML element.
 * - Expose theme state and theme switching
 *   functionality to all components.
 *
 * Why Context API?
 * Theme information is required across multiple
 * components (Navbar, Pages, Forms, etc.).
 * Using Context prevents prop drilling and allows
 * any component to access theme data directly.
 *
 * Supported Themes:
 * - light
 * - dark
 *
 * Dependencies:
 * - React Context API
 * - React Hooks (useState, useEffect, useContext)
 * - Browser localStorage
 * ==========================================================
 */

"use client";

import { createContext, useContext, useEffect, useState } from "react";

/**
 * Global context used to share theme-related
 * data across the application.
 *
 * Exposed Values:
 * - theme
 * - toggleTheme()
 */
const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
    // Stores the currently active application theme.
    // Default value is "light" until a saved preference
    // is loaded from localStorage.
    const [theme, setTheme] = useState("light");
    /**
     * Runs once when the application mounts.
     *
     * Responsibilities:
     * - Retrieve the previously selected theme
     *   from localStorage.
     * - Fallback to the light theme if no
     *   preference exists.
     * - Apply the theme to the root HTML element
     *   so CSS custom properties can react to it.
     */
    useEffect(() => {

        const savedTheme =
            localStorage.getItem("theme") || "light";

        setTheme(savedTheme);
        /**
         * The data-theme attribute enables
         * theme switching entirely through CSS.
         *
         * Example:
         *
         * :root {
         *     --background: white;
         * }
         *
         * [data-theme="dark"] {
         *     --background: black;
         * }
         */
        document.documentElement.setAttribute(
            "data-theme",
            savedTheme
        );

    }, []);

    /**
     * Switches between light and dark themes.
     *
     * Responsibilities:
     * - Update React state.
     * - Persist the selection in localStorage.
     * - Synchronize the HTML data-theme attribute.
     */
    const toggleTheme = () => {
        // Determine the next theme based on
        // the currently active mode.
        const newTheme =
            theme === "light"
                ? "dark"
                : "light";

        setTheme(newTheme);

        // Store the preference so the user's
        // choice persists across browser sessions.
        localStorage.setItem(
            "theme",
            newTheme
        );

        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );
    };

    return (
        /**
         * ThemeProvider Component
         *
         * Wraps the application and provides
         * theme-related state and actions to
         * all descendant components.
         *
         * @param {Object} props
         * @param {React.ReactNode} props.children
         * Components that should have access to
         * the global theme context.
         *
         * @returns {JSX.Element}
         * A React Context Provider containing
         * the current theme and toggle function.
         */

        /* Make theme data available to all
         components wrapped by ThemeProvider. */
        
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    );
}

/**
 * Custom hook for accessing theme data.
 *
 * Returns:
 * {
 *   theme: string,
 *   toggleTheme: Function
 * }
 *
 * Example:
 * const { theme, toggleTheme } = useTheme();
 *
 * Why use a custom hook?
 * It simplifies context consumption and prevents
 * components from importing useContext and
 * ThemeContext directly.
 */

export function useTheme() {
    return useContext(ThemeContext);
}

/**
 * Future Enhancements:
 * - System theme detection using
 *   window.matchMedia().
 * - Additional theme variants.
 * - Theme transition animations.
 */