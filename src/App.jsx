import { BrowserRouter } from "react-router-dom"
import { Navbar,About, Contact, Home, Works, BallCanvas } from "./components"

const App = () => {
 
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-body-color">
      <BallCanvas />
      
      <Navbar />
      <Home />
      
      <About />
      <Works />
      <Contact />
    </div>
    </BrowserRouter>
  )
}
 
export default App
