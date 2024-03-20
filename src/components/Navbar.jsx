import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg justify-content-center  border-bottom mb-4">
      
  
  
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" activeClassName="active" to="/">ALL</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="Fsd">FULL STACK DEVELOPMENT</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active"  to="Cyber">CYBER SECURITY</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="DataScience">DATA SCIENCE</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="Career">CAREER</NavLink>
      </li>
      
    </ul>
  
</nav>
    </div>
  )
}

export default Navbar