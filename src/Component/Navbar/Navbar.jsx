import { NavLink } from "react-router-dom";
import './Navbar.css'
export const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">Welcome</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"  id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home" style={({isActive})=>({color : isActive ? 'red' : 'black'})}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={({isActive})=>({color : isActive ? 'red' : 'black'})}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery" style={({isActive})=>({color : isActive ? 'red' : 'black'})}>Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={({isActive})=>({color : isActive ? 'red' : 'black'})}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register" style={({isActive})=>({color : isActive ? 'red' : 'black'})}>Register</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
