import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/" >  
        About Me
        </Link>,
        <Link key={2} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/portfolio" >
        Portfolio
        </Link>,  
        <Link key={3} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/resume" >
        Resume
        </Link>,
        <Link key={4} className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} to="/contact" >
        Contact
        </Link>,
      ]}
    />
  );
}
