import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Layout