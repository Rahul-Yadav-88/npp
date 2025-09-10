import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"


const Layout = () => {
  return (
    <div className="min-h-screen w-full">
       
          <Navbar />
       

     
          <Outlet />
     
     

   <div className="mt-10">
       <Footer />
   </div>
    </div>
  )
}

export default Layout
