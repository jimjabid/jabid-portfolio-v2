import { BrowserRouter } from "react-router-dom"
import { BallBg, Navbar,About, Tech,Contact, Home, Works } from "./components"

const App = () => {
 
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-body-color">
      <BallBg/>
      <Navbar />
      <Home />
      <About />
      <Tech/>
      <Works />
      <Contact />
    </div>
    </BrowserRouter>
  )
}
 
export default App
