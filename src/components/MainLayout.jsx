 import React from 'react'
import { Outlet } from 'react-router-dom'
import Leftsidebar from './Leftsidebar';
 const MainLayout = ()=>{
    return(
     <>
       <Leftsidebar/> 
       <Outlet/>
    </>
    )
  
}

export default MainLayout;  