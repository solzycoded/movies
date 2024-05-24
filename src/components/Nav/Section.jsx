import { NavLink } from "react-router-dom";
import Search from "../Search/Section";

import "../../assets/css/nav.css";
import NavItem from "./Item";

const Nav = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg app-bg-color text-white">
                <div className="container-fluid">
                    {/* application name */}
                    <NavLink to="/" className="navbar-brand">
                        <img src="/imgs/icon-nobg-white.png" className="img-fluid" id="app-logo" />
                    </NavLink>
                    {/* nav bar toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={ {"--bs-scroll-height": "100px"} }>
                            <NavItem link="/categories" title="Categories" />
                            <NavItem link="/genres" title="Genres" />
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        
                        <Search />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;