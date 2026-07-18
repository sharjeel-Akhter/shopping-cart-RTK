import { BrowserRouter } from "react-router"
import AllRoutes from "./routes/AllRoutes"
import { useEffect } from "react"
import { useTheme } from "./hooks/useTheme"





function App() {
  const {theme} = useTheme()
 useEffect(() => {

   const html = document.documentElement;
   if(theme==='dark'){
    html.classList.add('dark')
   }else{
    html.classList.remove('dark')
   }
   localStorage.setItem('theme', theme);
   console.log(localStorage.getItem('theme'))
}, [theme]);

  return (
    
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>

  )
}

export default App
