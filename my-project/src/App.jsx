// import ChuranBottle from "./app/Product/ChuranBottle";
// import CreamJar from "./app/Product/CreamJars";
// import DropperBottle from "./app/Product/DropperBottle";
// import FlipOff from "./app/Product/Flip-Off";
// import FloorCleaner from "./app/Product/FloorCleaner";
// import HandWash from "./app/Product/Handwash";
// import LotionBottle from "./app/Product/LotionBottle";
// import MeasuringSpoon from "./app/Product/MeasuringSpoons";
// import OilBottles from "./app/Product/OilBottle";
// import Pharma from "./app/Product/Pharma";
// import PharmaceuticalRubber from "./app/Product/PharmaceuticalRubber";
// import RoppCaps from "./app/Product/RoPPCaps";
// import ShampooBottle from "./app/Product/ShampooBottle";
// import StopperCAM from "./app/Product/StopperCAM";
// import ToiletCleaner from "./app/Product/ToiletCleaner";
// import Navbar from "./components/Product/Navbar/navbar";



// export default function App() {
//   return (
//     <div className="">
//       <Navbar/>
//       <Pharma/>
//       <MeasuringSpoon/>
//       <RoppCaps/>
//       <CreamJar/>
//       <ShampooBottle/>
//       <LotionBottle/>
//       <OilBottles/>
//       <PharmaceuticalRubber/>
//       <FloorCleaner/>
//       <ToiletCleaner/>
//       <HandWash/>
//       <StopperCAM/>
//       <ChuranBottle/>
//       <DropperBottle/>
//       <FlipOff/>
//     </div>
//   )
// }



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './app/Home/Home'
import About from './app/About/About'
import ProductPage from './app/ProductPage/ProductPage'





const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
  { 
    path: "/products/:id", 
    element: <ProductPage /> 
  },


    ]
  }
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
