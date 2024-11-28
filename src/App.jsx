// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import NavbarContent from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavbarContent />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
