import { BrowserRouter } from "react-router"

import AllRoutes from "./routes/AllRoutes"
import { Provider } from "react-redux"
import { store } from "../src/Store/store"

function App() {
 

  return (
    <Provider store={store}>
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
