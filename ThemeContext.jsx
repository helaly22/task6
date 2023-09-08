import React from "react";
import { createContext, useState } from "react";
export const ThemeProvider = createContext();
export default function ThemeContext({ children }) {
  let [theme, settheme] = useState("light");
  let themehandel = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  let[num,setNum]=useState(0)
  let hanelNumplus=()=>{
    setNum(num+1)
  }
  let hanleMinus=()=>{
    setNum(num-1)
  }
  return (
    <>
      <ThemeProvider.Provider value={{ theme, themehandel ,hanelNumplus,hanleMinus,num}}>
        {children}
      </ThemeProvider.Provider>
    </>
  );
}
