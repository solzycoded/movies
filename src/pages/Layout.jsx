import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Section";
import Footer from "../components/Footer/Section";

function Layout(){
    return (
        <>
            <Nav />
            <main id="main" className="mb-5">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;