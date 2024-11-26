import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/" >  
        About Me
        </NavLink>,
        <NavLink key={2} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/portfolio" >
        Portfolio
        </NavLink>,  
        <NavLink key={3} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/resume" >
        Resume
        </NavLink>,
        <NavLink key={4} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/contact" >
        Contact
        </NavLink>,
      ]}
    />
  );
}
