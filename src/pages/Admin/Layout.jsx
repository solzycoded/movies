import { Outlet } from "react-router-dom"
import Nav from "../../components/Admin/Nav/Section";

import "../../assets/css/dashboard.css"

function DashboardLayout(){
    return (
        <>
            <main id="main">
                <div className="container-fluid page-content d-flex p-0">
                    <Nav />

                    <div className="container-fluid main-body">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default DashboardLayout;