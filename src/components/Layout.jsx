import Navbar from './navbar/Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    )
}

export default Layout