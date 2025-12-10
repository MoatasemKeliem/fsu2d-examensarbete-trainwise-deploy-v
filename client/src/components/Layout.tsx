import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header>NAV</header>
            <main><Outlet /></main>
            <footer>FOOTER</footer>
        </div>
    )
}

export default Layout
