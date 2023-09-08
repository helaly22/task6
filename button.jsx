import React, { useContext } from "react";
import { ThemeProvider } from "./ThemeContext";

export default function Button() {
  let change = useContext(ThemeProvider);
  return (
    <>
      <h1>{change.num}</h1>
      <button onClick={change.hanelNumplus}>+</button>
      <button onClick={change.hanleMinus}>-</button>
    </>
  );
}
