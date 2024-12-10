import { BrowserRouter, Route, Routes } from "react-router"
import WhoYouAre from "./page/WhoYouAre"
import Home from "./page/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhoYouAre />}/>
      </Routes>
      <Routes>
        <Route path="/Home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App