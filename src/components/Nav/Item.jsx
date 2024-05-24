import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function NavItem({ link, title }){
    return (
        <>
            <li className="nav-item">
                <NavLink to={link} className="nav-link text-white">{ title }</NavLink>
            </li>
        </>
    )
}

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default NavItem;