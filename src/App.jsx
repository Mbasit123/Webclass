
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Index from "./assets/Components/Main"
import Navigation from "./assets/Components/Navbar"
import Two from "./assets/Components/2"
import Three from "./assets/3"
// import Four from "./assets/4"
import Map from "./assets/map"
import Five from "./assets/5"
import Six from "./assets/6"
import Seven from "./assets/7"
import Footer from "./assets/Footer"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="main" element={<Index/>}/>
      <Route path="nav" element={<Navigation/>}/>
      <Route path="two" element={<Two/>}/>
      <Route path="three" element={<Three/>}/>
      <Route path="map" element={<Map/>}/>
      <Route path="five" element={<Five/>}/>
      <Route path="six" element={<Six/>}/>
      <Route path="seven" element={<Seven/>}/>
      <Route path="footer" element={<Footer/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
