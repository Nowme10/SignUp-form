import React from 'react'
import { Outlet } from 'react-router-dom'

function Admin() {
    const isAdmin =false
  return (

    isAdmin ? 
    <Outlet/> :
    <><p> you're not authorize</p></>


       
  )
}

export default Admin