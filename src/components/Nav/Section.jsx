import { NavLink } from "react-router-dom";
import Search from "../Search/Section";

import "../../assets/css/nav.css";

const Nav = () => {
    return (
        <>
            
            <nav className="p-2 pe-3 ps-3 app-bg-color text-white position-sticky">
                <div className="container-fluid">
                    <div className="row">
                        {/* application name */}
                        <div className="col-6 col-sm-4 col-md-2">
                            <NavLink to="/" className="nav-link">
                                {/* <p className="p-0 m-0 fw-bolder fs-4">Movies <small className="fw-lighter fs-6 p-0">enjoy a good story</small></p> */}
                                <img src="/imgs/icon-nobg-white.png" className="img-fluid" id="app-logo" />
                            </NavLink>
                        </div>
                        {/* nav links and search bar */}
                        <div className="col-6 col-sm-8 col-md-10">
                            <div className="float-end d-flex justify-content-end">
                                <Search />

                                {/* nav links */}
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-1"><NavLink to="/categories" className="text-white text-decoration-none">categories</NavLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;