import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Home from "./Components/pages/Home"

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
