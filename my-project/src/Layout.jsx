import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"


const Layout = () => {
  return (
    <div className="min-h-screen w-full">
       
          <Navbar />
       

     
          <Outlet />
     
     

      <Footer />
    </div>
  )
}

export default Layout
