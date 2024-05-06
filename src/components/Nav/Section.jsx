import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            
            <nav className="p-2 pe-3 ps-3 app-bg-color text-white position-sticky">
                <div className="container-fluid">
                    <div className="row">
                        {/* application name */}
                        <div className="col-2">
                            <NavLink to="/" className="nav-link">
                                <p className="p-0 m-0 fw-bolder fs-4">Movies <small className="fw-lighter fs-6 p-0">enjoy a good story</small></p>
                            </NavLink>
                        </div>
                        {/* nav links and search bar */}
                        <div className="col-10 text-end">
                            <div className="d-flex justify-content-start">
                                <div className="search-bar-section"></div>
                                {/* search bar */}
                                <div>
                                    {/* icon */}
                                    <button className="btn btn-transparent text-white"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                            {/* nav links */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;