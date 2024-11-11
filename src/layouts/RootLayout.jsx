import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer';
import NavbarLayout from './NavbarLayout';

function RootLayout({ children }) {
    return (
        <>
        
        <NavbarLayout/>
        <main className='p-5'>
            {children}
        </main>
        <Footer/>
        </>
        
      );
}

export default RootLayout;