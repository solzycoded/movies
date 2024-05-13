import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Section";
import Footer from "../components/Footer";

function Layout(){
    return (
        <>
            <Nav />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;