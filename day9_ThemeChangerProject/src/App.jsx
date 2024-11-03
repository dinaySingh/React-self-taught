import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Card from "./components/Card";
import Themebtn from "./components/Themebtn";

function App() {
const [ThemeMode, setThemeMode] = useState("light")
const lightMode = () => {
  setThemeMode("light")
}
const darkMode = () => {
  setThemeMode("dark")
}

useEffect(() => {
document.querySelector("html").classList.remove("light","dark")
document.querySelector("html").classList.add(ThemeMode)
}, [ThemeMode])



  return (
    <ThemeProvider  value={{ThemeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
