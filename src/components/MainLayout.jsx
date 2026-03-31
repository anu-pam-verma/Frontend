 import React from 'react'
import { Outlet } from 'react-router-dom'
 const MainLayout = ()=>{
    return(
     <>
       <div>sidebar</div>
       <Outlet/>
    </>
    )
  
}

export default MainLayout;  