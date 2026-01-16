import React, { createContext, useContext, useState, useCallback } from 'react';

// Theme Context
const ThemeTransitionContext = createContext({
    theme: 'dark',
    setTheme: () => { },
});

// Custom hook to access theme
export const useTheme = () => useContext(ThemeTransitionContext);

// Provider Component
export const ThemeTransitionProvider = ({ children }) => {
    const [theme, setThemeState] = useState('dark');

    const setTheme = useCallback((newTheme) => {
        if (newTheme !== theme) {
            setThemeState(newTheme);
            // Apply theme to body for global CSS transitions
            document.body.setAttribute('data-theme', newTheme);
        }
    }, [theme]);

    // Initialize theme on mount
    React.useEffect(() => {
        document.body.setAttribute('data-theme', 'dark');
    }, []);

    return (
        <ThemeTransitionContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeTransitionContext.Provider>
    );
};

export default ThemeTransitionContext;
