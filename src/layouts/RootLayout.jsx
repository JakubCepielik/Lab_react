import Footer from './Footer';
import NavbarLayout from './NavbarLayout';
import { menuItemsFile } from '../data/menuItemsFile';

function RootLayout({ children }) {

    return (
        <>
        <NavbarLayout items={menuItemsFile}/>
        <main className='p-5'>
            {children}
        </main>
        <Footer/>
        </>
        
      );
}

export default RootLayout;