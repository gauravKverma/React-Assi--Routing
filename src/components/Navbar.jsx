import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display: "flex", gap:"20px", marginLeft:"46%"}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}
