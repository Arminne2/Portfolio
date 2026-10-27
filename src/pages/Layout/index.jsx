
import './layout.css'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return(
        <div className="layout">
            <Header/>
            <main className="layout-content">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout