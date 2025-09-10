<<<<<<< HEAD
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
=======
>>>>>>> b2c99f8049bf4ab58102ea9256745fd9c2feeaaa



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './app/Home/Home'
import About from './app/About/About'
import ProductPage from './app/ProductPage/ProductPage'
<<<<<<< HEAD
import QualityAssurance from './app/QualityAssurance/Quality'
=======
import Contact from './app/Contact/contact'
import CoreKey from './app/Core value/CoreKey'

>>>>>>> b2c99f8049bf4ab58102ea9256745fd9c2feeaaa





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
<<<<<<< HEAD
  { 
    path: "/products/:id", 
    element: <ProductPage /> 
  },
   {
        path: "/quality",
        element: <QualityAssurance />
=======
      {
        path: "/products/:id",
        element: <ProductPage />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/values",
        element: <CoreKey />
>>>>>>> b2c99f8049bf4ab58102ea9256745fd9c2feeaaa
      },


    ]
  }
])


const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <RouterProvider router={router} />

    </div>
=======
    <RouterProvider router={router} />
>>>>>>> b2c99f8049bf4ab58102ea9256745fd9c2feeaaa
  )
}

export default App
