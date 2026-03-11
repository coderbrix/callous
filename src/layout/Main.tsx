import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom"
import Hero from "../components/hero/Hero"

const Main = () => {
  return (
    <>
      <Header />
    
      <Outlet />
      <Footer />
    </>
  )
}

export default Main