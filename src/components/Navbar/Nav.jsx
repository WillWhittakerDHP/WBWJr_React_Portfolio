import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function NavbarContent() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'} to="/" >  
        About Me
        </NavLink>,
        <NavLink key={2} className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'} to="/portfolio" >
        Portfolio
        </NavLink>,  
        <NavLink key={3} className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'} to="/resume" >
        Resume
        </NavLink>,
        <NavLink key={4} className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'} to="/contact" >
        Contact
        </NavLink>,
      ]}
    />
  );
}
