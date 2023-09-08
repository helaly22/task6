import { useContext } from "react";
import { ThemeProvider } from "./ThemeContext";

export default function Theme() {
  let theme = useContext(ThemeProvider);
  return (
    <>
      <h1>{theme.theme}</h1>
      <button onClick={theme.themehandel}>change</button>
    </>
  );
}
