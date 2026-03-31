import { useState } from 'react'

import './App.css'
import Signup from './components/signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import SignIn from './components/signin'
import Profile from './components/Profile'

const browserRotuer =  createBrowserRouter([
   {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/profile",
        element:<Profile/>
      }

    ]
   },
   {
    path:"/login",
    element:<SignIn/>
   },
   {
    path:"/signup",
    element:<Signup/>
   }
])

function App() {

  return (
    <>
     <RouterProvider router={browserRotuer}/>
    </>
  )
}

export default App
