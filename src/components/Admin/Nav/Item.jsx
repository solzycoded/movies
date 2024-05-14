import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ link, title, icon }) => {
    return (
        <>
            <li className="nav-item">
                <NavLink to={`/dashboard${link.trim()=="" ? "" : ("/" + link)}`} className="nav-link text-white d-flex">
                    <i className={`nav-item-icon bi bi-${icon}`}></i>
                    <span className="only-lg-screen">{ title }</span>
                </NavLink>
            </li>
        </>
    )
}

NavItem.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default NavItem;