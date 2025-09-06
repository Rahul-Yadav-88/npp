import { Outlet } from "react-router-dom"
import Navbar from "./components/Product/Navbar/navbar"
import Footer from "./components/Product/Footer/footer"


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
