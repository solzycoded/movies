import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const BreadCrumbItem = ({ link, title, isActive }) => {
    // console.log(isActive);
    const active   = isActive ? "active" : "";
    const whenActive = !isActive ? "" : title;

    return (
        <>
            <li className={ `breadcrumb-item text-capitalize ${active}` }>
                {
                    !isActive && <NavLink to={ link } className="text-decoration-none app-color">{ title }</NavLink>
                }

                { whenActive }
            </li>
        </>
    )
}

BreadCrumbItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default BreadCrumbItem;