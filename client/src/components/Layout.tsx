import { Outlet } from 'react-router-dom'
import Navbar from './Navbars/Navbar'

const Layout = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main><Outlet /></main>
            <footer>FOOTER</footer>
        </div>
    )
}

export default Layout
