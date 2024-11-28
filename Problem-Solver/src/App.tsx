import { BrowserRouter, Route, Routes } from "react-router"
import WhoYouAre from "./page/WhoYouAre"
import Cards from "./page/Cards"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhoYouAre />}/>
      </Routes>
      <Routes>
        <Route path="/payment" element={<Cards />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App