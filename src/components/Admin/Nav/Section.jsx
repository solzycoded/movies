import { NavLink } from "react-router-dom";

import NavItem from "./Item";

const Nav = () => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white profile-menu-bar m-0 app-background-color">
                <NavLink to="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none only-lg-screen">
                    <img src="/imgs/icon-nobg-white.png" className="img-fluid" id="app-logo" />
                </NavLink>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <NavItem link="/" title="Dashboard" icon="house-door-fill" />
                    <NavItem link="movies" title="Movies" icon="film" />
                </ul>
            </div>
        </>
    )
}

export default Nav;