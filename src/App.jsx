import { BrowserRouter } from "react-router"
import AllRoutes from "./routes/AllRoutes"
import { useEffect } from "react"
import { useTheme } from "./hooks/useTheme"





function App() {
  const {theme} = useTheme()
  console.log(theme)
useEffect(() => {
  const html = document.documentElement;

  html.classList.remove("dark");

  if (theme === "dark") {
    html.classList.add("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

  return (
    
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>

  )
}

export default App
