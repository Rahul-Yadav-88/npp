


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
    <RouterProvider router={router} />
  )
}

export default App
