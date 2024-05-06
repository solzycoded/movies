import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function NavItem({ icon, link, title }){
    return (
        <>
            <li>
                <NavLink to={ link } className="nav-link">
                    <i className={`bi bi-${icon}`}></i> <span>{ title }</span>
                </NavLink>
            </li>
        </>
    )
}

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default NavItem;