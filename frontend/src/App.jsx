// import Navbar from "./components/shared/Navbar";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/',
    element: <Home/>
  }
])

import { Home } from 'lucide-react';
import React from 'react'
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
   <Navbar/>
    </>
  )
}

export default App
