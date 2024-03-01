import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Signup from "./Signup"
import Login from "./Login"
import Landing from "./Landing"

function App() {

  return (
    
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/landing" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App