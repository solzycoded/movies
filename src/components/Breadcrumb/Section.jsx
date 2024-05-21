import PropTypes from "prop-types"
import { useEffect } from "react";

const BreadCrumb = ({ url }) => {
    useEffect(() => {
        splitUrl();
    }, []); // Empty dependency array ensures it runs only once on mount

    const splitUrl = () => {
        const urlArr = url.split("/");
        console.log(urlArr);
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </>
    )
}

BreadCrumb.propTypes = {
    url: PropTypes.string.isRequired
}

export default BreadCrumb;