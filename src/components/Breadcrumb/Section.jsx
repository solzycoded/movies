import { useEffect, useState } from "react";

import App from "../../common/util";
import BreadCrumbItem from "./Item";

import PropTypes from "prop-types"

const BreadCrumb = ({ currentUrl }) => {
    const [breadCrumbs, setBreadCrumbs] = useState(null);

    useEffect(() => {
        setBreadCrumbs(makeBreadCrumbItems());
    }, []); // Empty dependency array ensures it runs only once on mount

    const splitUrl = () => {
        const urlArr = App.getMainUrl(currentUrl);

        const splitArr    = urlArr.split("/");
        const newSplitArr = splitArr.filter((v) => {
            return v!="";
        });

        return newSplitArr;
    }

    const makeBreadCrumbItems = () => {
        const splitUrlIntoArr  = splitUrl();
        let altSplitUrlIntoArr = splitUrlIntoArr;
        let breadCrumbItems    = [];
        let isActive           = true;

        for (let index = splitUrlIntoArr.length - 1; index >= 0; index--) {
            let urlLink   = "/" + altSplitUrlIntoArr.join("/");
            const element = altSplitUrlIntoArr.pop().replaceAll("%20", " ");

            breadCrumbItems.push(<BreadCrumbItem key={ index } link={ urlLink } title={ element } isActive={ isActive } />);

            isActive      = isActive ? false : isActive;
        }

        return breadCrumbItems.reverse();
    }

    return breadCrumbs && (
        <>
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <BreadCrumbItem link="/" title="Home" isActive={false} />
                        {
                            breadCrumbs.map((v) => {
                                return v;
                            })
                        }
                    </ol>
                </nav>
            </div>
        </>
    )
}

BreadCrumb.propTypes = {
    currentUrl: PropTypes.string.isRequired
}

export default BreadCrumb;