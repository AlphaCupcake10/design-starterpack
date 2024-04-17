import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type Theme = "light" | "dark" | null;

export type ThemeContextType = {
    theme:Theme,
    setTheme:(theme:Theme)=>void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme:"light",
    setTheme:()=>{}
})

export const useTheme = ()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider = (props:{children:ReactNode})=>{
    const [theme, setTheme] = useState<Theme>(null);

    useEffect(()=>{
        const localTheme = localStorage.getItem("theme") as Theme;
        if(localTheme){
            setTheme(localTheme);
        }
        else
        {
            setTheme("light");
        }
    },[])

    useEffect(()=>{
        if(theme){
            localStorage.setItem("theme", theme);
            document.documentElement.className = theme;
        }
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}